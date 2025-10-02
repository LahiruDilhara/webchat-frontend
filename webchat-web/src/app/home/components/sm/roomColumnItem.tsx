import getColorForString from "@/utils/ColorUtil";
import { format } from "date-fns";

type SmallRoomColumnItemProps = {
    name: string;
    caption: string;
    date: string;
    key?: string | number;
    onRoomClick: (roomId: string) => void;
    id: string;
    activeRoomId: string | null
}

const SmallRoomColumnItem = ({ name, caption, date, key, onRoomClick, id, activeRoomId }: SmallRoomColumnItemProps) => {
    const createdDate = new Date(date);
    console.log(date)
    return (
        <div className={`w-full shrink-0 flex flex-row gap-md min-h-0 cursor-pointer hover:brightness-75 ${activeRoomId === id ? "brightness-75" : ""}`} key={key} onClick={() => onRoomClick(id)}>
            <div className={`shrink-0 size-2xl ${getColorForString(name)} rounded-full flex justify-center items-center`}>{name.charAt(0).toUpperCase()}</div>
            <div className="w-full flex flex-row justify-between">
                <div>
                    <h1 className="text-body">{name}</h1>
                    <h1 className="text-caption">{caption}</h1>
                </div>
                <h1 className="text-caption">{format(createdDate, "yyyy/MM/dd")}</h1>
            </div>
        </div>
    );
}

export default SmallRoomColumnItem;