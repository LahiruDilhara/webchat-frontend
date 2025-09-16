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
        <section className="grid grid-rows-2 h-full">
            <section className="h-full">
                {/* <h1 className={`text-gray-500 font-bold lg:text-xl md:text-lg pb-2 ${folded ? "hidden" : ""}`}>Rooms /</h1> */}
                <div className="h-full space-y-4">
                    <div className="h-40 w-full bg-amber-800"></div>
                    <div className="h-40 w-full bg-amber-800"></div>
                    <div className="h-40 w-full bg-amber-800"></div>
                    {/* {rooms.map((r) =>
                        <div className="h-48 mb-5 w-full bg-amber-100">
                            <RoomItem key={r.id} id={r.id} roomName={r.roomName} folded={folded} onClick={() => onRoomClick(r.id)} icon={getRoomLetter(r.roomName)} iconColor={getRoomColor(r.roomName)}></RoomItem>
                        </div>
                    )} */}
                </div>
            </section>
            <section className=" bg-amber-50">
                {/* <SideBarBottomButton folded={folded} onClick={() => onAddRoomClick()} icon={"+"} iconColor={"#2563EB"} name={"Add Room"}></SideBarBottomButton> */}
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