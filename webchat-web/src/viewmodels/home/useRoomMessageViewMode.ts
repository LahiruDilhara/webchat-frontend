import { RootState } from "@/app/store";
import TextMessageResponseDTO from "@/dto/message/TextMessageResponseDTO";
import JoinRoomMessageDTO from "@/dto/websocket/requests/JoinRoomMessageDTO";
import LeaveRoomMessageDTO from "@/dto/websocket/requests/LeaveRoomMessageDTO";
import BaseResponseMessageDTO from "@/dto/websocket/responses/BaseResponseMessageDTO";
import ClientErrorMessageResponseDTO from "@/dto/websocket/responses/ClientErrorMessageResponseDTO";
import MessageResponseTypes from "@/dto/websocket/responses/MessageResponseTypes";
import NewRoomUserResponseMessageDTO from "@/dto/websocket/responses/NewRoomUserResponseMessageDTO";
import RoomUserLeftResponseMessageDTO from "@/dto/websocket/responses/RoomUserLeftResponseMessageDTO";
import useWebSocketManager from "@/hooks/websocket/useWebsSocketManager";
import { addMessage, addOrUpdateMessage, Message, removeMessageFromUUID, updateMessageByUUID } from "@/slices/message/MessageSlice";
import { generateUUID } from "@/utils/TextUtil";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TextMessageDTO from "@/dto/websocket/requests/TextMessageDTO";

export default function useRoomMessageViewModel() {
    const token = useSelector((state: RootState) => state.auth.token);
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const currentUser = useSelector((state: RootState) => state.auth.username);
    const reduxDispatcher = useDispatch();

    const onMessageReceived = (message: BaseResponseMessageDTO) => {
        if (message.type === MessageResponseTypes.CLIENT_ERROR) {
            const msg = message as ClientErrorMessageResponseDTO;
            toast.error(msg.error);
        }
        else if (message.type === MessageResponseTypes.NEW_DEVICE_CONNECTED) {
            toast.info("New device connected using same credentials");
        }
        else if (message.type === MessageResponseTypes.DEVICE_DISCONNECTED) {
            toast.info("A device using same credentials disconnected");
        }
        else if (message.type === MessageResponseTypes.NEW_ROOM_USER) {
            const msg = message as NewRoomUserResponseMessageDTO;
            toast.info(`${msg.username} joined the room`);
        }
        else if (message.type === MessageResponseTypes.ROOM_USER_LEFT) {
            const msg = message as RoomUserLeftResponseMessageDTO;
            toast.info(`${msg.username} left the room`);
        }
        else if (message.type === MessageResponseTypes.TYPING) {
            console.log("user is typing")
        }
        else if (message.type === MessageResponseTypes.TEXT_MESSAGE) {
            const msg = message as TextMessageResponseDTO;
            const createdTime = new Date(msg.createdAt);
            const updatedTime = new Date(msg.editedAt);
            const owner = msg.senderUsername.toLowerCase() === currentUser.toLowerCase();
            reduxDispatcher(addOrUpdateMessage({
                message: {
                    content: msg.content,
                    edited: createdTime.getTime() !== updatedTime.getTime(),
                    id: msg.id,
                    owner: owner,
                    roomId: msg.roomId,
                    sender: msg.senderUsername,
                    time: msg.createdAt,
                    type: msg.type,
                    uuid: msg.uuid,
                },
                roomId: msg.roomId
            }))
        }
    }

    const { connected, connectionError, sessionError, sendMessage } = useWebSocketManager(token, onMessageReceived);

    const onRoomJoin = (roomId: string | null) => {
        setActiveRoomId(roomId);
        if (!roomId) return;
        const message = new JoinRoomMessageDTO(Number(roomId), generateUUID());
        sendMessage(message, {
            onError: (error) => {
                toast.error(error);
                setActiveRoomId(null);
            }
        })
    }

    const onRoomLeave = () => {
        if (!activeRoomId) return;
        const message = new LeaveRoomMessageDTO(Number(activeRoomId), generateUUID());
        sendMessage(message, { sendOnly: true });
        setActiveRoomId(null);
    }

    const onSendTextMessage = (roomId: string, content: string) => {
        const uuid = generateUUID();
        const message: TextMessageDTO = new TextMessageDTO(Number(roomId), uuid, content);
        const placeHolderMessage: Message = {
            content,
            edited: false,
            id: "",
            owner: true,
            roomId,
            sender: currentUser,
            time: new Date().toISOString(),
            type: "TEXT",
            uuid,
            pending: true
        }
        reduxDispatcher(addMessage({ message: placeHolderMessage, roomId }));
        sendMessage(message, {
            onError: (error, uuid) => {
                toast.error(error);
                reduxDispatcher(removeMessageFromUUID({
                    roomId,
                    uuid: uuid
                }))
                console.log("message sending failed");
            },
            onSuccess: (message) => {
                const msg = message as TextMessageResponseDTO;
                const createdTime = new Date(msg.createdAt);
                const updatedTime = new Date(msg.editedAt);
                const owner = msg.senderUsername.toLowerCase() === currentUser.toLowerCase();
                const newMessage: Message = {
                    content: msg.content,
                    edited: createdTime.getTime() !== updatedTime.getTime(),
                    id: msg.id,
                    owner: owner,
                    roomId: msg.roomId,
                    sender: msg.senderUsername,
                    time: msg.createdAt,
                    type: msg.type,
                    uuid: msg.uuid,
                }
                console.log(newMessage);
                reduxDispatcher(updateMessageByUUID({
                    roomId,
                    uuid,
                    newMessage,
                }))
            },
            onTimeout: (uuid) => {
                toast.error("Message sending timed out");
                reduxDispatcher(removeMessageFromUUID({
                    roomId,
                    uuid
                }))
                console.log("message sending timed out")
            }
        });
    }


    return {
        activeRoomId,
        onRoomJoin,
        onRoomLeave,
        onSendTextMessage,
    }
}