import { RootState } from "@/app/store";
import SearchInput from "@/components/primitive/SearchInput";
import { Home, Plus, Search } from "lucide-react";
import { useSelector } from "react-redux";
import SmallRoomRowItem from "./roomRowItem";
import SmallRoomColumnItem from "./roomColumnItem";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import RoomChat from "../roomChat/RoomChat";
import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import BottomNavButton from './bottomNavButton';
import useSmHomePageViewModel from "@/viewmodels/home/useSmHomePageViewModel";

type SmHomePageProps = {
    rooms: RoomDetailsResponseDTO[]
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomClick: (roomId: string) => void
    activeRoomId: string | null
    onRoomAddClick: () => void
    setActiveRoomId: (roomId: string | null) => void
}

const SmHomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomClick, activeRoomId, onRoomAddClick, setActiveRoomId }: SmHomePageProps) => {
    const [searchEnabled, setSearchEnabled] = useState(false);
    const { ref } = useClickOutside<HTMLDivElement>(() => {
        setSearchEnabled(false);
        setSearchText("");
    });

    const { activeNavId, navItems } = useSmHomePageViewModel();

    if (activeRoomId !== null) return (
        <RoomChat onExitRoom={() => setActiveRoomId(null)} roomId={activeRoomId} />
    );

    return (
        <div className="w-full h-full grid grid-rows-[1fr_2fr_19fr_0.5fr] gap-md py-sm">
            <div className="flex items-center justify-between flex-row gap-sm">
                {!searchEnabled && (
                    <>
                        <h1 className="text-h2">Chat</h1>
                        <div className="p-sm cursor-pointer" onClick={() => setSearchEnabled(true)}><Search /></div>
                    </>
                )}
                {searchEnabled && (
                    <div className="w-full flex items-center justify-center" ref={ref}>
                        <SearchInput placeholder="Search..." value={searchText} onChange={setSearchText} className=" w-full" />
                    </div>
                )

                }
            </div>
            <div className="w-full flex min-w-0 px-sm min-h-fit flex-row gap-md overflow-x-auto">
                <div className="flex flex-col justify-center items-center text-center  cursor-pointer">
                    <div className="shrink-0 size-2xl outline-2 outline-offset-2 stroke-3 outline-dashed outline-primary-hover flex justify-center items-center border-2 border-primary hover:bg-primary rounded-full" onClick={onRoomAddClick}>
                        <Plus size={16}></Plus>
                    </div>
                </div>
                {
                    recentRooms.map(room => <SmallRoomRowItem id={room.id} onRoomClick={onRoomClick} roomName={room.name} key={room.id} />)
                }
                {recentRooms.length === 0 && <div className="text-body flex items-center text-input-placeholder">No Recent rooms yet ....</div>}
            </div>
            <div className="flex flex-col min-h-0 ">
                <h1 className="text-h3 pb-sm">Rooms</h1>
                <div className="flex flex-1 flex-col gap-lg overflow-y-scroll min-h-0">
                    {rooms.map(room => <SmallRoomColumnItem count={parseInt(room.unreadMessageCount)} activeRoomId={activeRoomId} id={room.id} onRoomClick={onRoomClick} caption={room.roomMembers.length.toString()} name={room.name} date={room.createdAt} key={room.id} />)}
                    {
                        rooms.length === 0 &&
                        <div className="h-full text-input-placeholder text-center flex justify-center flex-col items-center p-lg rounded-lg gap-sm">
                            <div className="text-body">No rooms found</div>
                            <div className="text-caption">Click on the + icon to create a room</div>
                        </div>
                    }
                </div>
            </div>
            <div className="rounded-2xl w-full flex flex-row justify-between bg-card-bg items-center gap-md">
                {navItems.map(ni=><BottomNavButton key={ni.id} icon={<ni.icon size={16}/>} active={activeNavId === ni.id} label={ni.label} onClick={ni.onClick} />)}
            </div>
        </div>
    );
}

export default SmHomePage;