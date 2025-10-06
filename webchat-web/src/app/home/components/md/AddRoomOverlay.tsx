import Overlay from "@/components/primitive/Overlay";
import useAddRoomOverlayViewmodel from "@/viewmodels/home/useAddRoomOverlayViewmodel";
import { X } from "lucide-react";
import AddRoom from "../addRoom/AddRoom";

type props = {
    onClose: () => void;
}
const AddRoomOverlay = ({ onClose }: props) => {
    const { dualUser, setDualUser, isClosed, isPrivate, name, setIsClosed, setIsPrivate, setName, nextUserName, setNextUserName, submit, loading } = useAddRoomOverlayViewmodel(onClose);
    return (
        <>
            <Overlay onClick={onClose} />
            <div className="fixed inset-0 z-100 flex justify-center items-center h-screen w-screen" onClick={onClose}>
                <div className="opacity-100 flex justify-center items-center h-full w-full md:w-2/5 md:h-3/5" onClick={(e) => e.stopPropagation()}>
                    <div className="h-full w-full bg-card-bg grid grid-rows-[1fr_20fr] md:p-lg md:gap-sm md:rounded-xl">
                        <div className=" w-full flex items-center justify-between px-md py-sm bg-background md:rounded-xl">
                            {dualUser ? <div className="text-body text-center flex-1">Add Dual User Room</div> : <div className="text-body text-center flex-1">Add Multi User Room</div>}
                            <div className="cursor-pointer hover:brightness-75" onClick={onClose}>
                                <X size={32} />
                            </div>
                        </div>
                        <AddRoom onSubmit={onClose} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRoomOverlay;