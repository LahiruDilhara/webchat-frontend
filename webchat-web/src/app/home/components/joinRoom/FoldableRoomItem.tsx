import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

type props = {
    name: string;
    roomId: string;
    closed: string;
    createdAt: string;
    memeberCount: string;
    onJoin: (roomId: string) => void;
}
const FoldableRoomItem = ({ name, roomId, closed, createdAt, onJoin, memeberCount }: props) => {
    const [folded, setFolded] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setFolded(true);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);

    return (
        <div className="px-sm w-full shrink-0 h-fit" onClick={() => setFolded(!folded)} ref={ref}>
            {folded ?
                <div className="flex flex-row w-full items-center gap-lg cursor-pointer hover:brightness-75">
                    <div className={`shrink-0 size-2xl ${getColorForString(name)} items-center rounded-full flex justify-center`}>{name.charAt(0).toUpperCase()}</div>
                    <div className="w-full flex flex-row justify-between items-center px-sm">
                        <h1 className="text-body">{capitalizeFirstLetter(name)}</h1>
                        <h1 className="text-caption">members {memeberCount}</h1>
                    </div>
                </div>
                :
                <div className="flex flex-col w-full items-center gap-md rounded-2xl">
                    <div className="flex flex-row w-full justify-between items-center gap-lg cursor-pointer hover:brightness-75">
                        <div className={`shrink-0 size-2xl ${getColorForString(name)} items-center rounded-full flex justify-center`}>{name.charAt(0).toUpperCase()}</div>
                        <div className="w-full flex flex-row justify-between items-center px-sm">
                        <h1 className="text-body">{capitalizeFirstLetter(name)}</h1>
                        <h1 className="text-caption">members {memeberCount}</h1>
                    </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center">
                        {!folded &&
                            <div className="w-full bg-card-bg text-button p-sm rounded-2xl flex flex-col gap-md">
                                <div className="w-full flex flex-col gap-sm">
                                    <div className="w-full flex flex-row justify-between">
                                        <h1>Room is Closed</h1>
                                        <h1>{closed}</h1>
                                    </div>
                                    <div className="w-full flex flex-row justify-between">
                                        <h1>Room Created</h1>
                                        <h1>{format(new Date(createdAt), "yyyy/MM/dd")}</h1>
                                    </div>
                                </div>
                                <div>
                                    <button className="w-full bg-primary hover:brightness-75 text-on-primary p-sm rounded-xl cursor-pointer" onClick={(e) => { e.stopPropagation(); onJoin(roomId); }}>Join</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }

        </div >
    );
}

export default FoldableRoomItem;