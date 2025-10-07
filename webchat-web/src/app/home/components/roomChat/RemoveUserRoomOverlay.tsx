import IconButton from "@/components/primitive/IconButtonButton";
import Overlay from "@/components/primitive/Overlay";
import UserResponseDto from "@/dto/user/UserResponseDto";
import getColorForString from "@/utils/ColorUtil";
import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

type props = {
    onClose: () => void
    onAction: (username: string) => void
    roomUsers: UserResponseDto[]
}

const RemoveUserRoomOverlay = ({ onClose, onAction, roomUsers }: props) => {
    const [username, setUsername] = useState<string | null>(null);
    return (
        <Overlay onClick={onClose} onClose={onClose} label="Delete Room" className="w-4/5 h-4/8 md:w-2/5">
            <div className="bg-background p-md rounded-xl h-full w-full flex flex-col gap-md items-center justify-center overflow-hidden">
                {roomUsers.map((user) =>
                    <div className={`w-full gap-sm flex flex-col cursor-pointer hover:brightness-75 ${user.username === username && "brightness-75 hover:brightness-50"}`} onClick={() => setUsername(user.username === username ? null : user.username)} key={user.id}>
                        <div className="flex h-full flex-row items-center  gap-lg bg-card-bg p-sm rounded-2xl">
                            {user.username === username ? <div className={`shrink-0 size-xl bg-success rounded-full flex items-center justify-center text-h3`}><Check size={20}/></div> : <div className={`shrink-0 size-xl ${getColorForString(user.username)} rounded-full flex items-center justify-center text-h3`}>{user.username.charAt(0).toUpperCase()}</div>}
                            <div className="text-button text-center">{user.username}</div>
                        </div>
                    </div>
                )}
                <IconButton icon={<Trash2 />} label="Delete Room" className="w-full" onClick={() => { onClose(); username !== null && onAction(username) }} />
            </div>
        </Overlay>
    );
}

export default RemoveUserRoomOverlay;