import { RootState } from "@/app/store";
import SearchInput from "@/components/primitive/SearchInput";
import { Plus } from "lucide-react";
import { useSelector } from "react-redux";
import SmallRoomRowItem from "./roomRowItem";
import SmallRoomColumnItem from "./roomColumnItem";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";

type SmHomePageProps = {
    rooms: RoomDetailsResponseDTO[]
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomClick: (roomId: string) => void
    activeRoomId: string | null
}

const SmHomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomClick, activeRoomId }: SmHomePageProps) => {

    return (
        <div className="w-full h-full grid grid-rows-[1fr_auto_7fr] gap-md py-md">
            <div className="flex flex-col gap-sm">
                <h1 className="text-h2">Chat</h1>
                <div className="w-full flex items-center justify-center">
                    <SearchInput placeholder="Search..." value={searchText} onChange={setSearchText} className=" w-full" />
                </div>
            </div>
            <div className="w-full flex min-h-fit flex-row gap-md overflow-x-auto">
                <div className="flex flex-col justify-center items-center text-center  cursor-pointer">
                    <div className="shrink-0 size-2xl flex justify-center items-center border-2 border-primary hover:bg-primary rounded-full">
                        <Plus size={16}></Plus>
                    </div>
                </div>
                {
                    recentRooms.map(room => <SmallRoomRowItem id={room.id} onRoomClick={onRoomClick} roomName={room.name} key={room.id} />)
                }
            </div>
            <div className="flex flex-col min-h-0">
                <h1 className="text-h3 pb-sm">Rooms</h1>
                <div className="flex flex-col gap-lg overflow-y-scroll min-h-0">
                    {rooms.map(room => <SmallRoomColumnItem count={parseInt(room.unreadMessageCount)} activeRoomId={activeRoomId} id={room.id} onRoomClick={onRoomClick} caption={room.roomMembers.length.toString()} name={room.name} date={room.createdAt} key={room.id} />)}
                </div>
            </div>
        </div>
    );
}

export default SmHomePage;