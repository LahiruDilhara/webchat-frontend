import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomChatViewModel(roomId: string, onExitRoom: () => void) {
    const dualUserRooms = useSelector((state: RootState) => state.dualUserRoom.dualUserRooms);
    const multiUserRooms = useSelector((state: RootState) => state.multiUserRoom.multiUserRooms);
    const allRooms = [...dualUserRooms, ...multiUserRooms];
    const room = allRooms.find(r => r.id === roomId) || null;

    if (room === null) {
        toast.error("Room not found");
        onExitRoom();
    }

    const onMenuClick = (action: string) => {
        console.log(action)
    }

    return {
        room,
        onMenuClick
    };
}