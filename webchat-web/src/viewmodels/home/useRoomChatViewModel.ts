import { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomChatViewModel(roomId: string, onExitRoom: () => void) {
    const dualUserRooms = useSelector((state: RootState) => state.dualUserRoom.dualUserRooms);
    const multiUserRooms = useSelector((state: RootState) => state.multiUserRoom.multiUserRooms);
    const currentUsername = useSelector((state: RootState) => state.auth.username);
    const allRooms = [...dualUserRooms, ...multiUserRooms];
    const [overlayName, setOverlayName] = useState<string | null>(null);
    const room = allRooms.find(r => r.id === roomId) || null;
    const isOwner = room?.createdBy.toLowerCase() === currentUsername.toLowerCase();

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
        isOwner
    };
}