import Overlay from "@/components/primitive/Overlay";

type props = {
    onClose: () => void
}

const AddUserRoomOverlay = ({ onClose }: props) => {
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Add User to Room" className="w-4/5 h-3/5 md:w-2/5">
            <div>Add User to Room</div>
        </Overlay>
    );
}

export default AddUserRoomOverlay;