import getColorForString from "@/utils/ColorUtil";
import { capitalizeFirstLetter } from "@/utils/TextUtil";
import useRoomChatViewModel from "@/viewmodels/home/useRoomChatViewModel";
import { ArrowLeft, Ellipsis, SendHorizonal } from "lucide-react";
import { useState } from "react";
import RoomDropdown from "../roomDropdown/RoomDropdown";
import useClickOutside from "@/hooks/useClickOutside";
import LeaveRoomOverlay from "./LeaveRoomOverlay";
import AddUserRoomOverlay from "./AddUserRoomOverlay";
import RemoveUserRoomOverlay from "./RemoveUserRoomOverlay";
import DeleteRoomOverlay from "./DeleteRoomOverlay";

type RoomChatProps = {
    onExitRoom: () => void,
    roomId: string
}

const RoomChat = ({ onExitRoom, roomId }: RoomChatProps) => {

    const { room, onMenuClick, removeMenu, overlayName, onLeave, onRoomDelete, onUserAdd, onUserRemove } = useRoomChatViewModel(roomId, onExitRoom);
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
                                    {roomDropdown && <RoomDropdown currentUserIsOwner={true} onButtonClick={(action) => { setRoomDropdown(false); onMenuClick(action); }} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card-bg rounded-xl flex flex-col min-h-0 flex-1 md:px-4xl sm:px-lg">
                <div className="min-h-0 flex-1 w-full flex gap-md flex-col overflow-y-auto px-sm">
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className="">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm">
                        <div className=" w-fit h-full">
                            <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                        </div>
                        <div className="flex-1 h-fit flex flex-col gap-sm">
                            <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                <div className="text-caption">lahiru</div>
                                <div className="text-caption px-sm">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                <div className="bg-amber-600 p-sm w-fit rounded-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi impedit in voluptatibus dolorem architecto rerum sint totam dolor repudiandae quam illum magni quas, velit fugit deserunt itaque, deleniti perferendis veritatis vero quaerat quis ut? Quibusdam modi similique aliquid dolor cum, molestias quisquam ratione quam? Dolores nostrum, maxime ut reiciendis facilis odio aliquam, laudantium adipisci fugit earum voluptates odit quasi! Reiciendis esse consequuntur ipsa eveniet nesciunt, nobis repudiandae accusamus! Tempore saepe dolorem delectus eveniet quia quisquam totam sunt doloribus aspernatur sequi, assumenda sed odit enim laborum facere iure quam. Eius beatae incidunt enim, doloribus officia debitis officiis qui quo eveniet.</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-11/14  h-fit shrink-0 flex flex-row gap-sm self-end">
                        <div className="flex-1 h-fit flex flex-col gap-sm w-full">
                            <div className="flex-1 w-full px-sm flex flex-row justify-end">
                                <div className="text-caption">21 min</div>
                            </div>
                            <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-end">
                                <div className="bg-accent p-sm w-fit rounded-2xl">Lorem</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-0 h-fit w-full px-sm py-md gap-sm flex flex-row">
                    <input className="bg-input-bg md:py-lg md:px-md text-caption flex-1 p-sm rounded-2xl placeholder:text-input-placeholder border-input-border focus-within:border-primary-hover focus:border-none focus:border-1 focus:outline-none" placeholder="Type a message..."></input>
                    <div className="bg-input-bg p-sm rounded-2xl cursor-pointer hover:brightness-50 flex justify-center items-center">
                        <SendHorizonal />
                    </div>
                </div>
            </div>
            {overlayName === "addUser" && <LeaveRoomOverlay onAction={onLeave} onClose={() => removeMenu()} />}
            {/* {overlayName === "addUser" && <AddUserRoomOverlay onClose={() => removeMenu()} />} */}
            {overlayName === "deleteUser" && <RemoveUserRoomOverlay onClose={() => removeMenu()} />}
            {overlayName === "deleteRoom" && <DeleteRoomOverlay onClose={() => removeMenu()} />}
        </div>
    );
}

export default RoomChat;