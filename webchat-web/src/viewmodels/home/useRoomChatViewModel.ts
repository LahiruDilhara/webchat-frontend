import { RootState } from "@/app/store";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
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
            onExitRoom();
        },
        onError: () => {
            toast.error("Failed to leave the room");
        }
    })

    const deleteMutation = useMutation({
        mutationFn: RoomService.deleteUserRoom,
        onSuccess: () => {
            toast.success("Room deleted successfully");
            onExitRoom();
        },
        onError: () => {
            toast.error("Failed to delete the room");
        }
    })

    const addUserMutation = useMutation({
        mutationFn: (data: { username: string, roomId: string }) => RoomService.addUserToRoom(data.username, data.roomId),
        onSuccess: () => {
            toast.success("User added to the room");
            onExitRoom();
        },
        onError: () => {
            toast.error("Failed to add user to the room");
        }
    })

    const removeUserMutation = useMutation({
        mutationFn: (data: { username: string, roomId: string }) => RoomService.removeUserFromRoom(data.username, data.roomId),
        onSuccess: () => {
            toast.success("User removed from the room");
            onExitRoom();
        },
        onError: () => {
            toast.error("Failed to remove user from the room");
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



    return {
        room,
        onMenuClick,
        removeMenu,
        overlayName,
        onLeave,
        onRoomDelete,
        onUserAdd,
        onUserRemove,
        isOwner,
        roomMembers
    };
}