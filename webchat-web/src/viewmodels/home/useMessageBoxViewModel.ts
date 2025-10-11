import { RootState } from "@/app/store";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function useMessageBoxViewModel(roomId: string, onMessageSend: (roomId: string, content: string) => void) {
    const [messageString, setMessageString] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const [isAtBottom, setIsAtBottom] = useState(true);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const rooms = useSelector((state: RootState) => state.message.rooms)

    const handleScroll = () => {
        if (!containerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 20;
        setIsAtBottom(atBottom);
    }

    useEffect(() => {
        if (isAtBottom) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [rooms])
    const messages = rooms[roomId] || [];



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