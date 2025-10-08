import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import RoomChat from "../roomChat/RoomChat";
import BottomNavButton from './bottomNavButton';
import useSmHomePageViewModel from "@/viewmodels/home/useSmHomePageViewModel";
import HomePage from "./navPages/homePage";
import JoinRoomPage from "./navPages/joinRoomPage";
import AddRoomPage from "./navPages/addRoomPage";

type SmHomePageProps = {
    rooms: RoomDetailsResponseDTO[]
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomJoin: (roomId: string) => void
    activeRoomId: string | null
    onRoomLeave: () => void
}

const SmHomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomJoin, activeRoomId, onRoomLeave }: SmHomePageProps) => {
    const { activeNavId, navItems } = useSmHomePageViewModel();
    if (activeRoomId !== null) return (
        <RoomChat onExitRoom={onRoomLeave} roomId={activeRoomId} />
    );

    return (
        <div className="w-full h-full grid grid-rows-[24fr_0.5fr] gap-md py-sm">
            {
                activeNavId === 0 && <HomePage activeRoomId={activeRoomId} onRoomJoin={onRoomJoin} recentRooms={recentRooms} rooms={rooms} searchText={searchText} setSearchText={setSearchText} />
            }
            {
                activeNavId === 1 && <JoinRoomPage />
            }
            {
                activeNavId === 2 && <AddRoomPage />
            }
            <div className="rounded-2xl w-full flex flex-row justify-between bg-card-bg items-center gap-md">
                {navItems.map(ni => <BottomNavButton key={ni.id} icon={<ni.icon size={16} />} active={activeNavId === ni.id} label={ni.label} onClick={ni.onClick} />)}
            </div>
        </div>
    );
}

export default SmHomePage;