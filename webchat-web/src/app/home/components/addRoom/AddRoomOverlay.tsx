import IconButton from "@/components/primitive/IconButtonButton";
import LabelInput from "@/components/primitive/LabelInput";
import LabelToggler from "@/components/primitive/LabelToggler";
import Overlay from "@/components/primitive/Overlay";
import useAddRoomOverlayViewmodel from "@/viewmodels/home/useAddRoomOverlayViewmodel";
import { BadgePlus, X } from "lucide-react";
import { ClipLoader } from "react-spinners";

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
                    <div className="h-full w-full bg-card-bg grid grid-rows-[1fr_20fr] p-lg gap-sm rounded-xl">
                        <div className="w-full flex items-center justify-between px-md py-sm bg-background rounded-xl">
                            {dualUser ? <div className="text-body text-center flex-1">Add Dual User Room</div> : <div className="text-body text-center flex-1">Add Multi User Room</div>}
                            <div className="cursor-pointer hover:brightness-75" onClick={onClose}>
                                <X size={32} />
                            </div>
                        </div>
                        <main className="bg-background p-md rounded-xl">
                            <div className="flex justify-between gap-md text-center">
                                <div className={`bg-card-bg text-button rounded-lg p-sm w-full hover:brightness-75 cursor-pointer ${!dualUser ? "" : "brightness-50"}`} onClick={() => setDualUser(false)}>Multi User Room</div>
                                <div className={`bg-card-bg text-button rounded-lg p-sm w-full hover:brightness-75 cursor-pointer ${!dualUser ? "brightness-50" : ""}`} onClick={() => setDualUser(true)}>Dual User Room</div>
                            </div>
                            <div className="pt-lg">
                                {
                                    dualUser && (
                                        <>
                                            <div className="py-lg flex flex-col gap-xl">
                                                <div className="flex flex-col gap-lg">
                                                    <LabelInput label="Enter Room Name" placeholder="Room Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                    <LabelInput label="Next User username" placeholder="Next User username" value={nextUserName} onChange={(e) => setNextUserName(e.target.value)} />
                                                </div>
                                                <IconButton icon={loading ? <ClipLoader size={24} /> : <BadgePlus />} label="Create Room" onClick={submit} />
                                            </div>
                                        </>
                                    )
                                }
                                {
                                    !dualUser && (
                                        <>
                                            <div className="py-lg flex flex-col gap-xl">
                                                <div className="flex flex-col gap-lg">
                                                    <LabelInput label="Enter Room Name" placeholder="Room Name" inputType="text" value={name} onChange={(e) => setName(e.target.value)} />
                                                    <LabelToggler onToggle={() => setIsPrivate(!isPrivate)} toggle={isPrivate} label={"Is room private *"} />
                                                    <LabelToggler onToggle={() => setIsClosed(!isClosed)} toggle={isClosed} label={"Is room closed *"} />
                                                </div>
                                                <IconButton icon={loading ? <ClipLoader size={24} /> : <BadgePlus />} label="Create Room" onClick={submit} />
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddRoomOverlay;