import { BadgePlus, LogOut, UserRoundMinus } from "lucide-react";
import React from "react";

type props = {
    currentUserIsOwner: boolean
    onButtonClick: (action: string) => void
}

const RoomDropdown = ({ currentUserIsOwner, onButtonClick }: props) => {
    return (
        <div className="bg-card-bg text-nowrap absolute top-full right-0 p-md flex flex-col gap-sm w-fit rounded-2xl" onClick={(e) => e.stopPropagation()}>
            {!currentUserIsOwner &&
                <div className="bg-card-item p-sm text-caption flex flex-row items-center gap-sm cursor-pointer hover:brightness-75 rounded-md" onClick={() => { onButtonClick("leave"); }}>
                    <LogOut />
                    <div>Leave room</div>
                </div>
            }
            {currentUserIsOwner &&
                <>
                    <div className="bg-card-item p-sm text-caption flex flex-row items-center gap-sm cursor-pointer hover:brightness-75 rounded-md" onClick={() => { onButtonClick("addUser"); }}>
                        <BadgePlus />
                        <div>Add new User</div>
                    </div>
                    <div className="bg-card-item p-sm text-caption flex flex-row items-center gap-sm cursor-pointer hover:brightness-75 rounded-md" onClick={() => { onButtonClick("deleteUser"); }}>
                            <UserRoundMinus />
                        <div>Remove User</div>
                    </div>
                    <div className="bg-card-item p-sm text-caption flex flex-row items-center gap-sm cursor-pointer hover:brightness-75 rounded-md" onClick={() => { onButtonClick("deleteRoom"); }}>
                        <div className="text-error">
                            <BadgePlus />
                        </div>
                        <div>Delete Room</div>
                    </div>
                </>
            }
        </div>
    );
}

export default RoomDropdown;