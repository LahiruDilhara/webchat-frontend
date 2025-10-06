import IconButton from "@/components/primitive/IconButtonButton";
import LabelInput from "@/components/primitive/LabelInput";
import LabelToggler from "@/components/primitive/LabelToggler";
import useAddRoomViewModel from "@/viewmodels/home/useAddRoomViewModel";
import { BadgePlus } from "lucide-react";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

type props = {
    onSubmit?: () => void;
    onDualUser?: (value: boolean) => void;
}

const AddRoom = ({ onSubmit, onDualUser }: props) => {
    const { dualUser, isClosed, isPrivate, loading, name, nextUserName, setDualUser, setIsClosed, setIsPrivate, setName, setNextUserName, submit } = useAddRoomViewModel(onSubmit);
    useEffect(() => {
        if (onDualUser) {
            onDualUser(dualUser)
        }
    }, [dualUser])
    
    return (
        <main className="bg-background p-md md:rounded-xl h-full w-full">
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
    );
}

export default AddRoom;