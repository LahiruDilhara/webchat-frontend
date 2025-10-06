import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import RoomChat from "../roomChat/RoomChat";
import BottomNavButton from './bottomNavButton';
import useSmHomePageViewModel from "@/viewmodels/home/useSmHomePageViewModel";
import HomePage from "./navPages/homePage";
import JoinRoomPage from "./navPages/joinRoomPage";

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
    const { activeNavId, navItems } = useSmHomePageViewModel();
    1
    if (activeRoomId !== null) return (
        <RoomChat onExitRoom={() => setActiveRoomId(null)} roomId={activeRoomId} />
    );

    return (
        <div className="w-full h-full grid grid-rows-[24fr_0.5fr] gap-md py-sm">
            {
                activeNavId === 0 && <HomePage activeRoomId={activeRoomId} onRoomAddClick={onRoomAddClick} onRoomClick={onRoomClick} recentRooms={recentRooms} rooms={rooms} searchText={searchText} setActiveRoomId={setActiveRoomId} setSearchText={setSearchText} />
            }
            {
                activeNavId === 1 && <JoinRoomPage />
            }
            <div className="rounded-2xl w-full flex flex-row justify-between bg-card-bg items-center gap-md">
                {navItems.map(ni => <BottomNavButton key={ni.id} icon={<ni.icon size={16} />} active={activeNavId === ni.id} label={ni.label} onClick={ni.onClick} />)}
            </div>
        </div>
    );
}

export default SmHomePage;