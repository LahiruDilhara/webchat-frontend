import { RootState } from "@/app/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomChatViewModel(roomId: string, onExitRoom: () => void) {
    const dualUserRooms = useSelector((state: RootState) => state.dualUserRoom.dualUserRooms);
    const multiUserRooms = useSelector((state: RootState) => state.multiUserRoom.multiUserRooms);
    const allRooms = [...dualUserRooms, ...multiUserRooms];
    const [overlayName, setOverlayName] = useState<string | null>(null);
    const room = allRooms.find(r => r.id === roomId) || null;

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

    }

    const onUserAdd = (username: string) => {

    }

    const onUserRemove = (username: string) => {

    }



    return {
        room,
        onMenuClick,
        removeMenu,
        overlayName,
        onLeave,
        onRoomDelete,
        onUserAdd,
        onUserRemove
    };
}