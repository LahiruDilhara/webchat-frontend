import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";
import useRoomChatViewModel from "@/viewmodels/home/useRoomChatViewModel";
import { ArrowLeft, Ellipsis, SendHorizonal } from "lucide-react";
import { useState } from "react";
import RoomDropdown from "../roomDropdown/RoomDropdown";
import useClickOutside from "@/hooks/primitive/useClickOutside";
import LeaveRoomOverlay from "./LeaveRoomOverlay";
import RemoveUserRoomOverlay from "./RemoveUserRoomOverlay";
import DeleteRoomOverlay from "./DeleteRoomOverlay";
import AddUserRoomOverlay from "./AddUserRoomOverlay";
import UpdateRoomOverlay from "./UpdateRoomOverlay";
import MultiUserRoomResponseDTO from "@/dto/room/MultiUserRoomResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import MessageBox from "./MessageBox";

type RoomChatProps = {
    onExitRoom: () => void,
    roomId: string
}

const RoomChat = ({ onExitRoom, roomId }: RoomChatProps) => {

    const { room, roomMembers, isOwner, onMenuClick, removeMenu, overlayName, onLeave, onRoomDelete, onUserAdd, onUserRemove, onRoomUpdate } = useRoomChatViewModel(roomId, onExitRoom);
    const [roomDropdown, setRoomDropdown] = useState(false);
    const ref = useClickOutside<HTMLDivElement>(() => setRoomDropdown(false))

    return (
        <div className="h-full w-full grid grid-rows-[1fr_16fr] gap-md py-sm md:py-0 sm:bg-background overflow-hidden">
            <div className="flex items-center gap-md sm:bg-card-bg h-full sm:px-md sm:py-sm sm:rounded-2xl">
                <div className="w-fit h-full flex items-center cursor-pointer hover:brightness-75" onClick={onExitRoom}>
                    <ArrowLeft />
                </div>
                <div className="flex-1 h-full flex items-center gap-sm">
                    <div className={` flex items-center justify-center ${getColorForString(room?.name || "")} aspect-square rounded-full w-sm h-sm text-body`}>{room?.name.charAt(0).toUpperCase()}</div>
                    <div className="flex-1 h-full flex flex-row justify-between items-center px-sm">
                        <div>
                            <div className="text-body">{capitalizeFirstLetter(room?.name || "")}</div>
                            <div className="text-caption">members {room?.roomMembers.length}</div>
                        </div>
                        <div>
                            <div className="p-sm cursor-pointer relative" onClick={() => setRoomDropdown(!roomDropdown)}>
                                <Ellipsis />
                                <div ref={ref}>
                                    {roomDropdown && room?.type && <RoomDropdown type={room?.type} currentUserIsOwner={isOwner} onButtonClick={(action) => { setRoomDropdown(false); onMenuClick(action); }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MessageBox roomId={roomId} />
            {overlayName === "leave" && <LeaveRoomOverlay onAction={onLeave} onClose={() => removeMenu()} />}
            {overlayName === "addUser" && <AddUserRoomOverlay onClose={() => removeMenu()} onAction={onUserAdd} />}
            {overlayName === "deleteUser" && <RemoveUserRoomOverlay onClose={() => removeMenu()} onAction={onUserRemove} roomUsers={roomMembers} />}
            {overlayName === "deleteRoom" && <DeleteRoomOverlay onClose={() => removeMenu()} onAction={onRoomDelete} />}
            {overlayName === "updateRoom" && <UpdateRoomOverlay room={room as MultiUserRoomDetailsResponseDTO} onClose={() => removeMenu()} onAction={onRoomUpdate} />}
        </div>
    );
}

export default RoomChat;