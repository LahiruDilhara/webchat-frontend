import RoomService from "@/services/RoomService";
import { addOrReplaceDualUserRoom } from "@/slices/room/DualUserRoomSlice";
import { addOrReplaceMultiUserRoom } from "@/slices/room/MultiUserRoomSlice";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function useAddRoomOverlayViewmodel(onClose?: () => void) {
    const [dualUser, setDualUser] = useState(false);
    const [isPrivate, setIsPrivate] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [name, setName] = useState("");
    const [nextUserName, setNextUserName] = useState("");
    const reduxDispatcher = useDispatch();

    const addDualUserMutation = useMutation({
        mutationFn: RoomService.createDualUserRoom,
        onSuccess: (data) => {
            if (onClose) {
                onClose();
            }
            reduxDispatcher(addOrReplaceDualUserRoom(data))
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    const addMultiUserMutation = useMutation({
        mutationFn: RoomService.createMultiUserRoom,
        onSuccess: (data) => {
            if (onClose) {
                onClose();
            }
            reduxDispatcher(addOrReplaceMultiUserRoom(data))
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })


    const submit = () => {
        if (dualUser) {
            addDualUserMutation.mutate({ name: name, addingUsername: nextUserName });
        }
        else {
            addMultiUserMutation.mutate({ name: name, isPrivate: isPrivate, closed: isClosed });
        }
        setName("");
        setNextUserName("");
        setIsPrivate(false);
        setIsClosed(false);
    }

    const loading = addDualUserMutation.isPending || addMultiUserMutation.isPending;

    return {
        dualUser,
        setDualUser,
        isPrivate,
        setIsPrivate,
        isClosed,
        setIsClosed,
        name,
        setName,
        nextUserName,
        setNextUserName,
        submit,
        loading
    }
}