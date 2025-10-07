import { RootState } from "@/app/store";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomChatViewModel(roomId: string, onExitRoom: () => void) {
    const currentUsername = useSelector((state: RootState) => state.auth.username);
    const { rooms, multiUserRooms } = useUserJoinedRoomsQuery();
    const [overlayName, setOverlayName] = useState<string | null>(null);
    const room = rooms.find(r => r.id === roomId) || null;
    const isOwner = room?.createdBy.toLowerCase() === currentUsername.toLowerCase();
    const roomMembers = room?.roomMembers.filter(m => m.username.toLowerCase() !== currentUsername.toLowerCase()) || [];

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
        console.log("leaving")
    }

    const onRoomDelete = () => {
        console.log("deleting")
    }

    const onUserAdd = (username: string) => {
        console.log("adding", username)
    }

    const onUserRemove = (username: string) => {
        console.log("removing", username)
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