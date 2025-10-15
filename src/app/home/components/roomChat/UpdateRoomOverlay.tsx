import IconButton from "@/components/primitive/IconButtonButton";
import LabelToggler from "@/components/primitive/LabelToggler";
import Overlay from "@/components/primitive/Overlay";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import { ArrowBigUp } from "lucide-react";
import { useState } from "react";

type props = {
    onClose: () => void
    onAction: (isPrivate: boolean, closed: boolean) => void
    room?: MultiUserRoomDetailsResponseDTO
}

const UpdateRoomOverlay = ({ onClose, onAction, room }: props) => {
    const [isPrivate, setIsPrivate] = useState<boolean>(!!room?.isPrivate);
    const [closed, setClosed] = useState<boolean>(!!room?.closed);
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Add User To Room" className="w-4/5 h-3/8 md:w-2/5">
            <div className="bg-background p-md rounded-xl  h-full w-full flex flex-col gap-md items-center justify-center">
                <div className="text-button text-center">Toggle the room settings</div>
                <LabelToggler label="is Room private*" className="w-full" toggle={isPrivate} onToggle={() => setIsPrivate(!isPrivate)} />
                <LabelToggler label="is Room closed*" className="w-full" toggle={closed} onToggle={() => setClosed(!closed)} />
                <IconButton icon={<ArrowBigUp />} label="Update The room" className="w-full" onClick={() => { onClose(); onAction(isPrivate, closed) }} />
            </div>
        </Overlay>
    );
}

export default UpdateRoomOverlay;