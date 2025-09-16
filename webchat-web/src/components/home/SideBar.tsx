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
        <section className={`px-4 h-full grid grid-rows-[11fr_1fr] ${folded ? "lg:w-25 md:w-20" : "lg:w-80 md:w-60"} transition-all duration-300`}>
            <section>
                <h1 className={`text-gray-500 font-bold lg:text-xl md:text-lg pb-5 ${folded ? "hidden" : ""}`}>Rooms /</h1>
                <div className="flex flex-col gap-4">
                    {rooms.map((r) =>
                        <RoomItem key={r.id} id={r.id} roomName={r.roomName} folded={folded} onClick={() => onRoomClick(r.id)} icon={getRoomLetter(r.roomName)} iconColor={getRoomColor(r.roomName)}></RoomItem>
                    )}
                </div>
            </section>
            <section>
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