import WebSocketService from "@/services/WebSocketService";
import { useEffect, useMemo, useState } from "react";

export default function useChatWebsocket() {

    const websocket = useMemo(() => new WebSocketService(), []);
    const [connectionError, setConnectionError] = useState<string | null>(null);

    useEffect(() => {
        
    }, [websocket])


}