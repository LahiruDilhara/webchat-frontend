import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";

type Props = {
    name: string,
    onRoomClick: (roomId: string) => void;
    id: string;
}

const MdRoomRowItem = ({ name, id, onRoomClick }: Props) => {
    return (
        <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl cursor-pointer hover:brightness-75" onClick={() => onRoomClick(id)}>
            <div className={`shrink-0 size-lg ${getColorForString(name)} rounded-full`}></div>
            <h1 className="text-caption pl-sm text-nowrap truncate w-15">{capitalizeFirstLetter(name)}</h1>
        </div>
    );
}

export default MdRoomRowItem;