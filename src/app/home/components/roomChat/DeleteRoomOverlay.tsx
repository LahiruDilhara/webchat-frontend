import IconButton from "@/components/primitive/IconButtonButton";
import Overlay from "@/components/primitive/Overlay";
import { Trash2 } from "lucide-react";

type props = {
    onClose: () => void
    onAction: () => void
}

const DeleteRoomOverlay = ({ onClose, onAction }: props) => {
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Delete Room" className="w-4/5 h-2/8 md:w-2/5">
            <div className="bg-background p-md rounded-xl  h-full w-full flex flex-col gap-md items-center justify-center">
                <div className="text-button text-center">Are you sure you want to delete this room?</div>
                <IconButton icon={<Trash2 />} label="Delete Room" className="w-full" onClick={() => { onClose(); onAction() }} />
            </div>
        </Overlay>
    );
}

export default DeleteRoomOverlay;