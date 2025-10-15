import IconButton from "@/components/primitive/IconButtonButton";
import LabelInput from "@/components/primitive/LabelInput";
import Overlay from "@/components/primitive/Overlay";
import { BadgePlus } from "lucide-react";
import { useState } from "react";

type props = {
    onClose: () => void
    onAction: (username: string) => void
}

const AddUserRoomOverlay = ({ onClose, onAction }: props) => {
    const [username, setUsername] = useState("");
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Add User To Room" className="w-4/5 h-3/8 md:w-2/5">
            <div className="bg-background p-md rounded-xl  h-full w-full flex flex-col gap-md items-center justify-center">
                <div className="text-button text-center">Enter the username of the user to add to room</div>
                <LabelInput inputType="text" onChange={(e) => setUsername(e.target.value)} value={username} className="w-full" placeholder="Enter username" label="Username" />
                <IconButton icon={<BadgePlus />} label="Add" className="w-full" onClick={() => { onClose(); onAction(username) }} />
            </div>
        </Overlay>
    );
}

export default AddUserRoomOverlay;