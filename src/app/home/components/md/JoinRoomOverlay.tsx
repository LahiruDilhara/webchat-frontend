import Overlay from "@/components/primitive/Overlay";
import JoinRoom from "../joinRoom/JoinRoom";

type props = {
    onClose: () => void;
    className?: string;
}

const JoinRoomOverlay = ({ onClose, className }: props) => {
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Join Room" className={className}>
            <JoinRoom />
        </Overlay>
    );
}

export default JoinRoomOverlay;