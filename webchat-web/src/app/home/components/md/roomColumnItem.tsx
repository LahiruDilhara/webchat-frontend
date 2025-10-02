import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";
import { format } from "date-fns";

type Props = {
    caption: string;
    date: string;
    name: string;
    onRoomClick: (roomId: string) => void;
    id: string;
    activeRoomId: string | null;
    count: number;
}

const MdRoomColumnItem = ({ caption, date, name, onRoomClick, id, activeRoomId, count }: Props) => {
    return (
        <div className={`w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer hover:brightness-75 ${activeRoomId === id ? "brightness-75" : ""}`} onClick={() => onRoomClick(id)}>
            <div className={`shrink-0 size-2xl ${getColorForString(name)} rounded-full flex items-center justify-center text-body`}>{name.charAt(0).toUpperCase()}</div>
            <div className="w-full flex flex-col justify-between">
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-body">{capitalizeFirstLetter(name)}</h1>
                    <h1 className={`text-caption bg-accent rounded-full h-fit p-0.5 ${isNaN(count) ? "hidden" : ""}`}>{isNaN(count) ? 0 : count}</h1>
                </div>
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-caption hidden lg:block">{caption}</h1>
                    <h1 className="text-caption">{format(new Date(date), "yyyy/MM/dd")}</h1>
                </div>
            </div>
        </div>
    );
}

export default MdRoomColumnItem;