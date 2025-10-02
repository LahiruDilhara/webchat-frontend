import getColorForString from "@/utils/ColorUtil";

type SmallRoomRowItemProps = {
    roomName: string;
    onRoomClick: (roomId: string) => void;
    id: string;
}
const SmallRoomRowItem = ({ roomName,  onRoomClick, id }: SmallRoomRowItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center text-center cursor-pointer hover:brightness-75" onClick={()=>onRoomClick(id)}>
            <div className={`shrink-0 size-2xl ${getColorForString(roomName)} rounded-full text-body text-center flex items-center justify-center`}>{roomName.charAt(0).toUpperCase()}</div>
        </div>
    );
}

export default SmallRoomRowItem;