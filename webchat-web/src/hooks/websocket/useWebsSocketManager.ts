import { buildWebSocketUrl } from "@/utils/UrlUtil";
import useWebSocket from "./useWebSocket";
import BaseResponseMessageDTO from "@/dto/websocket/responses/BaseResponseMessageDTO";
import { useEffect, useMemo, useRef } from "react";
import MessageResponseTypes from "@/dto/websocket/responses/MessageResponseTypes";
import ClientErrorMessageResponseDTO from "@/dto/websocket/responses/ClientErrorMessageResponseDTO";
import BaseMessageDTO from "@/dto/websocket/requests/BaseMessageDTO";

export interface SentMessage {
    uuid: string;
    onError: (error: string, uuid:string) => void;
    onSuccess: (message: BaseResponseMessageDTO, uuid:string) => void;
    onTimeout: (uuid:string) => void;
    timeOutId?: NodeJS.Timeout;
}

interface SendMessageOptions {
    onError?: (error: string, uuid:string) => void;
    onSuccess?: (message: BaseResponseMessageDTO,uuid:string) => void;
    onTimeout?: (uuid:string) => void;
    timeOutDuration?: number;
    sendOnly?: boolean;
}

export default function useWebSocketManager(token: string, onMessage: (data: BaseResponseMessageDTO) => void, queueSize: number = 50) {
    const sentMessageQueue = useRef<Map<string, SentMessage>>(new Map());

    const pushSentMessage = (message: SentMessage) => {
        sentMessageQueue.current.set(message.uuid, message);
        if (sentMessageQueue.current.size > queueSize) {
            const oldestKey = sentMessageQueue.current.keys().next().value;
            if (!oldestKey) return;
            const oldestMessage = sentMessageQueue.current.get(oldestKey);
            oldestMessage?.onTimeout(oldestKey);
            if (oldestMessage?.timeOutId) {
                clearTimeout(oldestMessage.timeOutId);
            }
            sentMessageQueue.current.delete(oldestKey);
        }
    }

    const onNewMessage = (message: BaseResponseMessageDTO) => {
        const sentMessage = sentMessageQueue.current.get(message.uuid);
        if (!sentMessage) {
            onMessage(message);
            return;
        }

        if (message.type === MessageResponseTypes.CLIENT_ERROR) {
            const errorMessage = message as ClientErrorMessageResponseDTO;
            sentMessage.onError(errorMessage.error,errorMessage.uuid);
        } else {
            sentMessage.onSuccess(message,message.uuid);
        }
        if (sentMessage.timeOutId) {
            clearTimeout(sentMessage.timeOutId);
        }
        sentMessageQueue.current.delete(message.uuid);
    };

    const onWebSocketMessage = (data: any) => {
        if (!data.type) {
            console.warn("Received message without type:", data);
            return;
        }
        const message = data as BaseResponseMessageDTO;
        onNewMessage(message);
    }

    useEffect(() => {
        return () => {
            sentMessageQueue.current.forEach((msg) => {
                if (msg.timeOutId) {
                    clearTimeout(msg.timeOutId);
                }
                msg.onTimeout(msg.uuid);
            });
            sentMessageQueue.current.clear();
        }
    }, [])

    const url = useMemo(() => buildWebSocketUrl(token), [token]);


    const { connected, connectionError, sendMessage: onMessageSent, sessionError } = useWebSocket(url, onWebSocketMessage);


    const sendMessage = (message: BaseMessageDTO, options: SendMessageOptions = {}) => {
        if (!connected) {
            console.warn("WebSocket is not connected. Cannot send message.");
            return;
        }
        const onError = options.onError || (() => { });
        const onSuccess = options.onSuccess || (() => { });
        const onTimeout = options.onTimeout || (() => { });
        let timeOutId = undefined;
        if (options.timeOutDuration && options.timeOutDuration > 0) {
            timeOutId = setTimeout(() => {
                if (sentMessageQueue.current.has(message.uuid)) {
                    sentMessageQueue.current.delete(message.uuid);
                    onTimeout(message.uuid);
                }
            }, options.timeOutDuration);
        }

        onMessageSent(message);
        if (options.sendOnly) return;
        pushSentMessage({
            uuid: message.uuid,
            onError,
            onSuccess,
            onTimeout,
            timeOutId
        });
    };

    return {
        connected,
        connectionError,
        sessionError,
        sendMessage
    };
}