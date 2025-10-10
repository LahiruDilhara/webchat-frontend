import { RootState } from "@/app/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function useMessageBoxViewModel(roomId: string) {
    const [messageString, setMessageString] = useState("");

    const rooms = useSelector((state: RootState) => state.message.rooms)
    const messages = rooms[roomId] || [];

    return {
        messages,
        message: messageString,
        setMessage: setMessageString
    }
}