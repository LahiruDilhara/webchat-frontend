import { useEffect, useRef, useState } from "react";

export default function useWebSocket(urlString: string, onMessage: (data: any) => void, retryCount: number = 3, retryInterval: number = 1000) {
    const [connectionError, setConnectionError] = useState<string | null>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const [sessionError, setSessionError] = useState<string | null>(null);

    // Attemps is a state because in reattempt need to show the messages
    const [attempts, setAttempts] = useState<number>(0);

    // no need to re-render the component when socket changes. that's why useRef
    const socketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        let retryTimeout: NodeJS.Timeout | null = null;

        const connect = () => {
            const socket = new WebSocket(urlString);
            socketRef.current = socket;

            socket.onopen = () => {
                setConnected(true);
                setConnectionError(null);
                setAttempts(0);
            }

            socket.onclose = (event) => {
                setConnected(false);
                if (event.code === 1000 || event.code === 1001) {
                    return;
                }
                if (attempts < retryCount) {
                    retryTimeout = setTimeout(() => {
                        setAttempts((prev) => {
                            console.log(`Reconnecting... Attempt ${prev + 1}`);
                            connect();
                            return prev + 1;
                        })
                    }, retryInterval);
                    return;
                }
                if (event.code === 1006) {
                    setConnectionError(`Connection closed abnormally`);
                }
                else if (event.code === 1011) {
                    setConnectionError(`Server error occurred: ${event.reason}`);
                }
                else if (event.code === 1001) {
                    setConnectionError("Server is going down");
                }
                else {
                    setConnectionError("Unexpected error happened");
                }
                setAttempts(0);
            }

            socket.onerror = (event) => {
                console.log(event);
            }

            socket.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);
                    onMessage(data);
                } catch (error) {
                    setSessionError("Failed to parse message data from server.");
                    console.error("Failed to parse message data:", error);
                }
            }
        }

        connect();

        return () => {
            if (retryTimeout) {
                clearTimeout(retryTimeout);
            }
            if (socketRef.current?.readyState === WebSocket.OPEN) {
                console.log("WebSocket connection closed");
                socketRef.current.close(1000, "Component unmounted");
            }
        }
        // The cleanup function runs before the effect is re-run or when the component is unmounted.
    }, [])

    const sendMessage = (message: any) => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify(message));
        } else {
            setSessionError("WebSocket is not open. Unable to send message.");
        }
    }

    return {
        connected,
        connectionError,
        sessionError,
        sendMessage
    }
}