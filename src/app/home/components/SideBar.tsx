import RoomItem from "./RoomItem";
import SideBarBottomButton from "./SideBarBottomButton";

type SideBarProps = {
    folded: boolean;
    onRoomClick: (id: number) => void;
    rooms: Array<{ id: number; roomName: string; }>;
    onAddRoomClick: () => void;
}
const SideBar = ({ folded, onRoomClick, rooms, onAddRoomClick }: SideBarProps) => {
    return (
        <section className="grid grid-rows-[6fr_1fr] h-full">
            <section className="h-full min-h-0 min-w-0">
                <h1 className={`text-gray-500 font-bold lg:text-xl md:text-lg pb-2 overflow-hidden whitespace-nowrap ${folded ? "opacity-0" : ""}`}>Rooms /</h1>
                <div className="min-h-0 h-full overflow-y-auto space-y-5">
                    {rooms.map((r) =>
                        <div className="w-full" key={r.id}>
                            <RoomItem key={r.id} id={r.id} roomName={r.roomName} folded={folded} onClick={() => onRoomClick(r.id)} icon={getRoomLetter(r.roomName)} iconColor={getRoomColor(r.roomName)}></RoomItem>
                        </div>
                    )}
                </div>
            </section>
            <section className="min-h-0 h-full grid content-end min-w-0">
                <SideBarBottomButton folded={folded} onClick={() => onAddRoomClick()} icon={"+"} iconColor={"#2563EB"} name={"Add Room"}></SideBarBottomButton>
            </section>
        </section>
    );
}

function getRoomLetter(roomName: string): string {
    return roomName.charAt(0).toUpperCase();
}

function getRoomColor(roomName: string): string {
    const roomLetter = getRoomLetter(roomName);
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "teal", "pink"];
    const letterNumber = letterToNumber(roomLetter);
    return colors[letterNumber % colors.length];

}

function letterToNumber(letter: string): number {
    return letter.charCodeAt(0) - 65;
}

export default SideBar;