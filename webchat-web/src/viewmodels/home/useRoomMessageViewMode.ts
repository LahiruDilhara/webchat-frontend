import { RootState } from "@/app/store";
import useWebSocket from "@/hooks/websocket/useWebSocket";
import { buildWebSocketUrl } from "@/utils/UrlUtil";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function useRoomMessageViewModel() {
    const token = useSelector((state: RootState) => state.auth.token);
    const { connected, connectionError, sendMessage, sessionError } = useWebSocket(buildWebSocketUrl(token), () => { });
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const roomJoinUUID = useRef<string | null>(null);

    const onRoomJoin = (roomId: string) => {

        setActiveRoomId(roomId);
    }


    return {
        sendMessage,
        activeRoomId,
    }
}