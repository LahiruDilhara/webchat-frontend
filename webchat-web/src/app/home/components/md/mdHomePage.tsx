import SearchInput from "@/components/primitive/SearchInput";
import { Menu, Plus } from "lucide-react";
import { useState } from "react";
import MdRoomRowItem from "./roomRowItem";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import MdRoomColumnItem from "./roomColumnItem";
import RoomChat from "../roomChat/RoomChat";
import Image from "next/image";

type props = {
    rooms: RoomDetailsResponseDTO[],
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomClick: (roomId: string) => void
    activeRoomId: string | null
    onRoomAddClick: () => void
    setActiveRoomId: (roomId: string | null) => void
}

const MdHomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomClick, activeRoomId, onRoomAddClick, setActiveRoomId }: props) => {
    const [folded, setFolded] = useState(false);

    return (
        <div className="w-full h-full grid grid-rows-[1fr_15fr] py-sm">
            <div className="flex flex-row min-h-fit items-center min-w-0 w-full">
                <div className="flex flex-row min-h-fit items-center gap-md w-full">
                    <div className="cursor-pointer" onClick={() => setFolded(!folded)}>
                        <Menu />
                    </div>
                    <h1 className="text-h2">Chat</h1>
                    <div className=" shrink-0 flex-1 overflow-auto">
                        <div className="w-full flex items-center gap-lg">
                            <div className="flex flex-row justify-center items-center text-center p-sm rounded-2xl">
                                <div className="shrink-0 size-2xl flex justify-center items-center border-2 border-primary hover:bg-primary rounded-full cursor-pointer" onClick={onRoomAddClick}>
                                    <Plus size={16}></Plus>
                                </div>
                            </div>
                            {
                                recentRooms.map((room) => <MdRoomRowItem id={room.id} name={room.name} key={room.id} onRoomClick={onRoomClick} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`grid gap-lg pt-sm ${folded ? "grid-cols-1" : "grid-cols-[2fr_8fr]"} h-full overflow-hidden`}>
                {!folded && (
                    <div className="flex flex-col min-h-0 min-w-0 gap-md">
                        <h1 className="text-body">Rooms</h1>
                        <div className="w-full flex items-center justify-center">
                            <SearchInput placeholder="Search..." value={searchText} onChange={setSearchText} className=" w-full" />
                        </div>
                        <div className="flex flex-col gap-lg overflow-y-scroll ">
                            {
                                rooms.map((room) => <MdRoomColumnItem count={parseInt(room.unreadMessageCount)} activeRoomId={activeRoomId} id={room.id} onRoomClick={onRoomClick} name={room.name} caption={room.roomMembers.length.toString()} date={room.createdAt} key={room.id} />)
                            }

                        </div>
                    </div>
                )}
                <div className="w-full h-full min-h-0 rounded-lg bg-card-bg">
                    {activeRoomId !== null && <RoomChat onExitRoom={() => setActiveRoomId(null)} roomId={activeRoomId} />}
                    {activeRoomId === null &&
                        <div className="w-full h-full flex justify-center items-center text-center flex-col gap-lg">
                            <Image src="/images/chatBlue.svg" alt={"logo"} width={200} height={200} />
                            <div className="flex flex-col gap-sm">
                                <h1 className="text-h3">No converstation selected</h1>
                                <h1>Select a room to start chatting</h1>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MdHomePage;
