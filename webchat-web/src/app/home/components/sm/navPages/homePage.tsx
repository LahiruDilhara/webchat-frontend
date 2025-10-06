import SearchInput from "@/components/primitive/SearchInput"
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO"
import useClickOutside from "@/hooks/useClickOutside"
import { Plus, Search } from "lucide-react"
import { useState } from "react"
import SmallRoomRowItem from "../roomRowItem"
import SmallRoomColumnItem from "../roomColumnItem"
import Image from "next/image"

type SmHomePageProps = {
    rooms: RoomDetailsResponseDTO[]
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomClick: (roomId: string) => void
    activeRoomId: string | null
}

const HomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomClick, activeRoomId }: SmHomePageProps) => {
    const [searchEnabled, setSearchEnabled] = useState(false);
    const { ref } = useClickOutside<HTMLDivElement>(() => {
            setSearchEnabled(false);
            setSearchText("");
        });

    return (
        <div className="w-full h-full grid grid-rows-[1fr_2fr_19fr] gap-md py-sm min-h-0">
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
                            <Image src="/images/chatBlue.svg" alt={"logo"} width={120} height={120} />
                            <div className="text-body">No rooms found</div>
                            <div className="text-caption">Create a new room to start the converstation</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;