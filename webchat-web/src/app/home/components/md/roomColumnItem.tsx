import getColorForString from "@/utils/ColorUtil";
import { format } from "date-fns";

type Props = {
    caption: string;
    date: string;
    name: string;
    onRoomClick: (roomId: string) => void;
    id: string;
}

const MdRoomColumnItem = ({ caption, date, name, onRoomClick, id }: Props) => {
    return (
        <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer hover:brightness-75" onClick={() => onRoomClick(id)}>
            <div className={`shrink-0 size-2xl ${getColorForString(name)} rounded-full`}></div>
            <div className="w-full flex flex-col justify-between">
                <h1 className="text-body">{name}</h1>
                <div className="flex flex-row justify-between w-full">
                    <h1 className="text-caption hidden lg:block">{caption}</h1>
                    <h1 className="text-caption">{format(new Date(date), "yyyy/MM/dd")}</h1>
                </div>
            </div>
        </div>
    );
}

export default MdRoomColumnItem;