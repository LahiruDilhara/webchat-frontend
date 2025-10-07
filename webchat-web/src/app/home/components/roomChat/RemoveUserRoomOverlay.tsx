import Overlay from "@/components/primitive/Overlay";

type props = {
    onClose: () => void
}

const RemoveUserRoomOverlay = ({ onClose }: props) => {
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Remove User from Room" className="w-4/5 h-3/5 md:w-2/5">
            <div>Remove User from Room</div>
        </Overlay>
    );
}

export default RemoveUserRoomOverlay;