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
            <div className="fixed inset-0 opacity-100 z-100 flex justify-center items-center h-screen w-screen">
                <div className="h-full w-full bg-card-bg grid grid-rows-[1fr_20fr] p-lg gap-sm">
                    <div className="w-full flex items-center justify-end bg-background">
                        <div className="p-sm cursor-pointer hover:brightness-75" onClick={onClose}>
                            <X size={32} />
                        </div>
                    </div>
                    <main className="bg-background p-md">
                        <div className="flex justify-between gap-md text-center">
                            <div className={`bg-card-bg text-button p-sm w-full hover:brightness-75 cursor-pointer ${dualUser ? "" : "brightness-50"}`} onClick={() => setDualUser(false)}>Multi User Room</div>
                            <div className={`bg-card-bg text-button p-sm w-full hover:brightness-75 cursor-pointer ${dualUser ? "opacity-50" : ""}`} onClick={() => setDualUser(true)}>Dual User Room</div>
                        </div>
                        <div className="pt-lg">
                            {
                                dualUser && (
                                    <>
                                        <h1 className="text-center text-h3">Add Dual User Room</h1>
                                        <div className="py-lg flex flex-col gap-xl">
                                            <div className="flex flex-col gap-lg">
                                                <LabelInput label="Enter Room Name" placeholder="Room Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                <LabelInput label="Next User username" placeholder="Next User username" value={nextUserName} onChange={(e) => setNextUserName(e.target.value)} />
                                            </div>
                                            <IconButton icon={ loading ? <ClipLoader size={24} /> : <BadgePlus />} label="Create Room" onClick={submit} />
                                        </div>
                                    </>
                                )
                            }
                            {
                                !dualUser && (
                                    <>
                                        <h1 className="text-center text-h3">Add Multi User Room</h1>
                                        <div className="py-lg flex flex-col gap-xl">
                                            <div className="flex flex-col gap-lg">
                                                <LabelInput label="Enter Room Name" placeholder="Room Name" inputType="text" value={name} onChange={(e) => setName(e.target.value)} />
                                                <LabelToggler onToggle={() => setIsPrivate(!isPrivate)} toggle={isPrivate} label={"Is room private *"} />
                                                <LabelToggler onToggle={() => setIsClosed(!isClosed)} toggle={isClosed} label={"Is room closed *"} />
                                            </div>
                                            <IconButton icon={ loading ? <ClipLoader size={24} /> : <BadgePlus />} label="Create Room" onClick={submit} />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default AddRoomOverlay;