import Overlay from "@/components/primitive/Overlay";

type props = {
    onClose: () => void
}

const DeleteRoomOverlay = ({ onClose }: props) => {
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Delet Room" className="w-4/5 h-3/5 md:w-2/5">
            <div>Delete Room</div>
        </Overlay>
    );
}

export default DeleteRoomOverlay;