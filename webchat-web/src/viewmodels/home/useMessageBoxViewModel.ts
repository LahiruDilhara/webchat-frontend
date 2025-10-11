import { RootState } from "@/app/store";
import TextMessageResponseDTO from "@/dto/message/TextMessageResponseDTO";
import MessageResponseTypes from "@/dto/websocket/responses/MessageResponseTypes";
import Messagemapper from "@/mapper/MessageMapper";
import MessageService from "@/services/MessageService";
import { addOrReplaceMessage, Message } from "@/slices/message/MessageSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useMessageBoxViewModel(roomId: string, onMessageSend: (roomId: string, content: string) => void) {
    const [messageString, setMessageString] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = useState(true);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [messageLoading, setMessageLoading] = useState(false);
    const [prevMessageLoading, setPrevMessageLoading] = useState(false);
    const reduxDispatcher = useDispatch();
    const currentUser = useSelector((state: RootState) => state.auth.username);
    const rooms = useSelector((state: RootState) => state.message.rooms)
    const messages = rooms[roomId] || [];

    const fetchPreviousMessages = async () => {
        if (!roomId || messageLoading || prevMessageLoading || messages.length === 0) return;
        const firstMessage: Message = rooms[roomId][0];
        setPrevMessageLoading(true);
        const container = containerRef.current;
        if (!container) return;
        const oldScrollHeight = container.scrollHeight;
        const oldScrollTop = container.scrollTop;

        const prevMessages = await MessageService.getPrevious15Messages(roomId, firstMessage.id);
        prevMessages.forEach(msg => {
            reduxDispatcher(addOrReplaceMessage({
                roomId: roomId,
                message: Messagemapper.textMessageResponseDTOToMessage(msg as TextMessageResponseDTO, currentUser)
            }))
        })
        setPrevMessageLoading(false);
        requestAnimationFrame(() => {
        if (container) {
            const newScrollHeight = container.scrollHeight;
            container.scrollTop = newScrollHeight - oldScrollHeight + oldScrollTop;
        }
    });
    }

    useEffect(() => {
        if (!roomId) return;
        const queryLast10Messages = async () => {
            setMessageLoading(true);
            const messages = await MessageService.getRoomLast10Messages(roomId);
            messages.forEach(msg => {
                if (msg.type == MessageResponseTypes.TEXT_MESSAGE) {
                    const textMsg = msg as TextMessageResponseDTO;
                    reduxDispatcher(addOrReplaceMessage({
                        roomId: roomId,
                        message: Messagemapper.textMessageResponseDTOToMessage(textMsg, currentUser)
                    }))
                }
            })
            setMessageLoading(false);
        }
        queryLast10Messages();
    }, [roomId]);


    useEffect(() => {
        if (isAtBottom) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [rooms])



    const handleScroll = () => {
        if (!containerRef.current) return;
        if (containerRef.current.scrollTop === 0 && !prevMessageLoading && !messageLoading) {
            fetchPreviousMessages();
        }

        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 20;
        setIsAtBottom(atBottom);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (messageString.trim() === "") return;
            setMessageString("");
            onMessageSend(roomId, messageString.trim());
        }
    }

    const handleTextMessageSend = () => {
        if (messageString.trim() === "") return;
        setMessageString("");
        onMessageSend(roomId, messageString.trim());
    }

    useEffect(() => {
        const textArea = textAreaRef.current;
        if (textArea && messageString === "") {
            textArea.style.height = "auto";
        }
    }, [messageString]);

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textArea = textAreaRef.current;

        setMessageString(e.target.value);
        if (textArea) {
            textArea.style.height = "auto";
            textArea.style.height = Math.min(textArea.scrollHeight, 200) + "px";
        }
    }

    return {
        messages,
        message: messageString,
        setMessage: setMessageString,
        containerRef,
        bottomRef,
        handleScroll,
        handleKeyDown,
        handleTextMessageSend,
        textAreaRef,
        handleTextAreaChange
    }
}