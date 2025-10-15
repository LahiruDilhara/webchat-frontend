import Overlay from "@/components/primitive/Overlay";
import AddRoom from "../addRoom/AddRoom";
import { useState } from "react";

type props = {
    onClose: () => void;
    className?: string;
}
const AddRoomOverlay = ({ onClose, className }: props) => {
    const [dualUser, setDualUser] = useState(true);
    return (
        <Overlay onClick={onClose} onClose={onClose} className={className} label={dualUser ? "Add Dual User Room" : "Add Multi User Room"}>
            <AddRoom onSubmit={onClose} onDualUser={(value) => setDualUser(value)} />
        </Overlay>
    );
}

export default AddRoomOverlay;