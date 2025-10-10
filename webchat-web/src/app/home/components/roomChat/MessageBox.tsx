import { formatRelativeTime } from "@/utils/TimeUtil";
import useMessageBoxViewModel from "@/viewmodels/home/useMessageBoxViewModel";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";
type props = {
    roomId: string
    onTextMessageSend: (roomId: string, content: string) => void
}
const MessageBox = ({ roomId, onTextMessageSend }: props) => {
    const { message, messages, setMessage } = useMessageBoxViewModel(roomId);
    return (
        <div className="bg-card-bg rounded-xl flex flex-col min-h-0 flex-1 md:px-4xl sm:px-lg">
            <div className="min-h-0 flex-1 w-full flex gap-md flex-col overflow-y-auto px-sm">
                {messages.map(m => {
                    if (m.owner) return (
                        <div className="w-11/14  h-fit shrink-0 flex flex-row gap-sm self-end" key={m.id}>
                            <div className="flex-1 h-fit flex flex-col gap-sm w-full">
                                <div className="flex-1 w-full px-sm flex flex-row justify-end">
                                    <div className="text-caption flex flex-row gap-sm">
                                        <div className="text-caption">{formatRelativeTime(m.time)}</div>
                                        {m.edited && <div className="text-input-placeholder">edited</div>}
                                    </div>
                                </div>
                                <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-end">
                                    <div className="bg-accent p-sm w-fit rounded-2xl">{m.content}</div>
                                </div>
                            </div>
                        </div>
                    );
                    if (!m.owner) return (
                        <div className="w-8/9 h-fit shrink-0 flex flex-row gap-sm" key={m.id}>
                            <div className=" w-fit h-full">
                                <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                            </div>
                            <div className="flex-1 h-fit flex flex-col gap-sm">
                                <div className="flex-1 w-full px-sm flex flex-row justify-between">
                                    <div className="text-caption">lahiru</div>
                                    <div className="text-caption flex flex-row gap-sm">
                                        <div className="text-caption">{formatRelativeTime(m.time)}</div>
                                        {m.edited && <div className="text-input-placeholder">edited</div>}
                                    </div>
                                </div>
                                <div className="flex-5 h-fit max-w-full w-full rounded-2xl flex justify-start">
                                    <div className="bg-amber-600 p-sm w-fit rounded-2xl">{m.content}</div>
                                </div>
                            </div>
                        </div>
                    );
                    return <div></div>
                })}
            </div>
            <div className="min-h-0 h-fit w-full px-sm py-md gap-sm flex flex-row">
                <input className="bg-input-bg md:py-lg md:px-md text-caption flex-1 p-sm rounded-2xl placeholder:text-input-placeholder border-input-border focus-within:border-primary-hover focus:border-none focus:border-1 focus:outline-none" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)}></input>
                <div className="bg-input-bg p-sm rounded-2xl cursor-pointer hover:brightness-50 flex justify-center items-center" onClick={() => { onTextMessageSend(roomId, message); setMessage(""); }}>
                    <SendHorizonal />
                </div>
            </div>
        </div>
    );
}

export default MessageBox;