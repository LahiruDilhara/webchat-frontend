import { RootState } from "@/app/store";
import JoinRoomMessageDTO from "@/dto/websocket/requests/JoinRoomMessageDTO";
import LeaveRoomMessageDTO from "@/dto/websocket/requests/LeaveRoomMessageDTO";
import useWebSocket from "@/hooks/websocket/useWebSocket";
import useWebSocketManager from "@/hooks/websocket/useWebsSocketManager";
import { generateUUID } from "@/utils/TextUtil";
import { buildWebSocketUrl } from "@/utils/UrlUtil";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function useRoomMessageViewModel() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const { connected, connectionError, sessionError, sendMessage } = useWebSocketManager(token, (message) => { console.log(message) });

    const onRoomJoin = (roomId: string | null) => {
        setActiveRoomId(roomId);
        if (!roomId) return;
        const message = new JoinRoomMessageDTO(Number(roomId), generateUUID());
        sendMessage(message, {
            onError: (error) => {
                toast.error(error);
                setActiveRoomId(null);
            },
            onTimeout: () => {
                toast.error("Join Room request timed out");
                setActiveRoomId(null);
            },
            timeOutDuration: 10000
        })
    }

    const onRoomLeave = () => {
        if (!activeRoomId) return;
        const message = new LeaveRoomMessageDTO(Number(activeRoomId), generateUUID());
        sendMessage(message, { sendOnly: true });
        setActiveRoomId(null);
    }


    return {
        activeRoomId,
        onRoomJoin,
    }
}