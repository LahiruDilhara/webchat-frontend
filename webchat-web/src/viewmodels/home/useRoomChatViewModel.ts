import { RootState } from "@/app/store";
import QueryKeys from "@/core/QueryKeys";
import resetQueryCaches, { resetRoomUsersCache } from "@/core/ResetQueryCaches";
import UpdateMultiUserRoomDTO from "@/dto/room/UpdateMultiUserRoomDTO";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
import { queryClient } from "@/lib/QueryClient";
import RoomService from "@/services/RoomService";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomChatViewModel(roomId: string, onExitRoom: () => void) {
    const currentUsername = useSelector((state: RootState) => state.auth.username);
    const { rooms } = useUserJoinedRoomsQuery();
    const [overlayName, setOverlayName] = useState<string | null>(null);
    const room = rooms.find(r => r.id === roomId) || null;
    const isOwner = room?.createdBy.toLowerCase() === currentUsername.toLowerCase();
    const roomMembers = room?.roomMembers.filter(m => m.username.toLowerCase() !== currentUsername.toLowerCase()) || [];

    const leaveMutation = useMutation({
        mutationFn: RoomService.leaveFromRoom,
        onSuccess: () => {
            toast.success("You have left the room");
            resetQueryCaches();
            onExitRoom();
        },
        onError: (e) => {
            toast.error(e.message);
        }
    })

    useEffect(() => {
        console.log(rooms)
    }, [rooms])

    const deleteMutation = useMutation({
        mutationFn: RoomService.deleteUserRoom,
        onSuccess: () => {
            toast.success("Room deleted successfully");
            resetQueryCaches();
            onExitRoom();
        },
        onError: (e) => {
            toast.error(e.message);
        }
    })

    const addUserMutation = useMutation({
        mutationFn: (data: { username: string, roomId: string }) => RoomService.addUserToRoom(data.username, data.roomId),
        onSuccess: () => {
            toast.success("User added to the room");
            resetQueryCaches();
            onExitRoom();
        },
        onError: (e) => {
            toast.error(e.message);
        }
    })

    const removeUserMutation = useMutation({
        mutationFn: (data: { username: string, roomId: string }) => RoomService.removeUserFromRoom(data.username, data.roomId),
        onSuccess: () => {
            toast.success("User removed from the room");
            resetQueryCaches();
            onExitRoom();
        },
        onError: (e) => {
            toast.error(e.message);
        }
    })

    const updateRoom = useMutation({
        mutationFn: (data: { roomId: string, updateDTO: UpdateMultiUserRoomDTO }) => RoomService.updateMultiUserRoom(data.updateDTO, data.roomId),
        onSuccess: () => {
            toast.success("The room updated");
            resetRoomUsersCache()
            onExitRoom()
        },
        onError: (e) => {
            toast.error(e.message)
        }
    })

    if (room === null) {
        toast.error("Room not found");
        onExitRoom();
    }

    const onMenuClick = (action: string) => {
        setOverlayName(action);
    }

    const removeMenu = () => {
        setOverlayName(null);
    }

    const onLeave = () => {
        if (room) {
            leaveMutation.mutate(room.id.toString());
        }
    }

    const onRoomDelete = () => {
        if (room) {
            deleteMutation.mutate(room.id);
        }
    }

    const onUserAdd = (username: string) => {
        if (room) {
            addUserMutation.mutate({ username, roomId: room.id });
        }
    }

    const onUserRemove = (username: string) => {
        if (room) {
            removeUserMutation.mutate({ username, roomId: room.id });
        }
    }

    const onRoomUpdate = (isPrivate: boolean, closed: boolean) => {
        if (room) {
            const updateDTO: UpdateMultiUserRoomDTO = {
                isPrivate,
                closed
            }
            updateRoom.mutate({ roomId: room.id, updateDTO });
        }
    }



    return {
        room,
        onMenuClick,
        removeMenu,
        overlayName,
        onLeave,
        onRoomDelete,
        onUserAdd,
        onUserRemove,
        onRoomUpdate,
        isOwner,
        roomMembers
    };
}