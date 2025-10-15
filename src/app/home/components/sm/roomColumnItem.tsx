import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";
import { format } from "date-fns";

type SmallRoomColumnItemProps = {
    name: string;
    caption: string;
    date: string;
    onRoomClick: (roomId: string) => void;
    id: string;
    activeRoomId: string | null
    count: number;
}

const SmallRoomColumnItem = ({ name, caption, date, onRoomClick, id, activeRoomId, count }: SmallRoomColumnItemProps) => {
    const createdDate = new Date(date);
    console.log(date)
    return (
        <div className={`w-full shrink-0 flex flex-row gap-md min-h-0 cursor-pointer hover:brightness-75 ${activeRoomId === id ? "brightness-75" : ""}`} onClick={() => onRoomClick(id)}>
            <div className={`shrink-0 size-2xl ${getColorForString(name)} rounded-full flex justify-center items-center`}>{name.charAt(0).toUpperCase()}</div>
            <div className="w-full flex flex-row justify-between">
                <div>
                    <h1 className="text-body">{capitalizeFirstLetter(name)}</h1>
                    <h1 className="text-caption">{caption}</h1>
                </div>
                <div className=" flex flex-col items-end gap-sm">
                    <h1 className="text-caption">{format(createdDate, "yyyy/MM/dd")}</h1>
                    <h1 className={`text-caption bg-accent rounded-full flex min-w-0 max-w-fit text-end p-0.5 ${isNaN(count) || count === 0 ? "hidden" : ""}`}>{isNaN(count) ? 0 : count}</h1>
                </div>
            </div>
        </div>
    );
}

export default SmallRoomColumnItem;