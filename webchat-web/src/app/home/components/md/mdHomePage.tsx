import SearchInput from "@/components/primitive/SearchInput";
import { Menu, Plus } from "lucide-react";
import { useState } from "react";
import MdRoomRowItem from "./roomRowItem";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import MdRoomColumnItem from "./roomColumnItem";
import RoomChat from "../roomChat/RoomChat";
import Image from "next/image";
import IconOutlinedButton from "@/components/primitive/IconOutlinedButton";
import AddRoomOverlay from "./AddRoomOverlay";
import JoinRoomOverlay from "./JoinRoomOverlay";


type props = {
    rooms: RoomDetailsResponseDTO[],
    recentRooms: RoomDetailsResponseDTO[]
    searchText: string
    setSearchText: (text: string) => void
    onRoomClick: (roomId: string) => void
    activeRoomId: string | null
    setActiveRoomId: (roomId: string | null) => void
}

const MdHomePage = ({ rooms, recentRooms, searchText, setSearchText, onRoomClick, activeRoomId, setActiveRoomId }: props) => {
    const [folded, setFolded] = useState(false);
    const [addRoom, setAddRoom] = useState(false);
    const [joinRoom, setJoinRoom] = useState(false);

    return (
        <div className="w-full h-full grid grid-rows-[1fr_15fr] py-sm">
            <div className="flex flex-row min-h-fit items-center min-w-0 w-full">
                <div className={`grid ${folded ? "grid-cols-[1fr_8fr]" : "grid-cols-[2fr_8fr]"} min-h-fit gap-md w-full`}>
                    <div className="flex flex-row items-center gap-md">
                        <div className="cursor-pointer" onClick={() => setFolded(!folded)}>
                            <Menu />
                        </div>
                        <h1 className="text-h2">Chat</h1>
                    </div>
                    <div className=" shrink-0 flex-1 overflow-auto self-start">
                        <div className="w-full flex items-center gap-lg">
                            <div className="flex flex-row justify-cente gap-lg r items-center text-center p-sm rounded-2xl">
                                <div className="shrink-0 size-2xl flex justify-center outline-2 outline-offset-2 outline-primary-hover items-center border-2 border-primary hover:bg-primary rounded-full cursor-pointer" onClick={() => setAddRoom(true)}>
                                    <Plus size={16}></Plus>
                                </div>
                            </div>
                            {recentRooms.length === 0 && <div className="text-body text-input-placeholder">No Recent rooms yet ....</div>}
                            {
                                recentRooms.map((room) => <MdRoomRowItem id={room.id} name={room.name} key={room.id} onRoomClick={onRoomClick} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`grid gap-lg pt-sm ${folded ? "grid-cols-1" : "grid-cols-[2fr_8fr]"} h-full overflow-hidden`}>
                {!folded && (
                    <div className="flex flex-col min-h-0 min-w-0 gap-md ">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="text-body">Rooms</h1>
                            <div className="text-caption cursor-pointer hover:brightness-75 px-md py-xs rounded-2xl border-2 border-primary hover:bg-primary-hover" onClick={() => setJoinRoom(true)}>Join room</div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <SearchInput placeholder="Search..." value={searchText} onChange={setSearchText} className=" w-full" />
                        </div>
                        <div className="flex-1 flex flex-col gap-md overflow-y-scroll">
                            {
                                rooms.map((room) => <MdRoomColumnItem count={parseInt(room.unreadMessageCount)} activeRoomId={activeRoomId} id={room.id} onRoomClick={onRoomClick} name={room.name} caption={room.roomMembers.length.toString()} date={room.createdAt} key={room.id} />)
                            }
                            {
                                rooms.length === 0 &&
                                <div className="h-full text-input-placeholder text-center flex justify-center flex-col items-center p-lg rounded-lg gap-sm">
                                    <div className="text-body">No rooms found</div>
                                    <div className="text-caption">Click on the + icon to create a room</div>
                                </div>
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
            {addRoom && <AddRoomOverlay onClose={() => setAddRoom(false)} className="md:w-2/5 md:h-3/5" />}
            {joinRoom && <JoinRoomOverlay onClose={() => setJoinRoom(false)} className="md:w-2/5 md:h-3/5" />}
        </div>
    );
}

export default MdHomePage;
