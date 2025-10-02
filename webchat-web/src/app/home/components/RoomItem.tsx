type RoomItemProps = {
    id: number;
    roomName: string;
    icon: string;
    folded: boolean;
    onClick: () => void;
    iconColor: string;
}
const RoomItem = ({ id, roomName, icon, folded, onClick, iconColor }: RoomItemProps) => {
    return (
        <div className={`w-full transition-all duration-300 cursor-pointer hover:brightness-70 flex flex-row items-center  rounded-l-full rounded-r-full overflow-hidden ${folded ? "w-full" : "w-full bg-gray-900"}`} onClick={() => onClick()}>
            <div className={`aspect-square flex items-center justify-center rounded-full lg:text-lg md:text-md font-bold ${folded ? "min-w-full" : "min-w-1/4"}`} style={{ backgroundColor: iconColor }}>{icon}</div>
            <div className={`text-gray-500 w-full lg:text-md md:text-sm font-medium px-5 whitespace-nowrap overflow-hidden ${folded ? "hidden" : ""}`}>{roomName}</div>
        </div>
    );
}

export default RoomItem;