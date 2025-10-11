import { formatRelativeTime } from "@/utils/TimeUtil";
import useMessageBoxViewModel from "@/viewmodels/home/useMessageBoxViewModel";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
type props = {
    roomId: string
    onTextMessageSend: (roomId: string, content: string) => void
}
const MessageBox = ({ roomId, onTextMessageSend }: props) => {
    const { message, messages, containerRef, bottomRef, textAreaRef, messageLoading, prevMessageLoading, handleTextAreaChange, handleScroll, handleKeyDown, handleTextMessageSend } = useMessageBoxViewModel(roomId, onTextMessageSend);
    return (
        <div className="bg-card-bg rounded-xl flex flex-col min-h-0 flex-1 md:px-4xl sm:px-lg min-w-0">
            <div className="min-h-0 flex-1 w-full flex gap-md flex-col overflow-y-auto overflow-x-hidden px-sm" ref={containerRef} onScroll={handleScroll}>
                { prevMessageLoading && <div className="w-full flex justify-center items-center text-accent"><ClipLoader color="#4A4A4A" /></div> }
                {messages.map(m => {
                    if (m.owner) return (
                        <div className="w-full  shrink-0 flex flex-row gap-sm self-end" key={m.id}>
                            <div className="flex-1  flex flex-col gap-sm w-full">
                                <div className="flex-1 w-full px-sm flex flex-row justify-end">
                                    <div className="text-caption flex flex-row gap-sm">
                                        <div className="text-caption text-nowrap">{formatRelativeTime(m.time)}</div>
                                        {m.edited && <div className="text-input-placeholder">edited</div>}
                                    </div>
                                </div>
                                <div className="flex-5  max-w-full w-full rounded-2xl flex justify-end">
                                    <div className="bg-accent p-sm rounded-2xl text-body max-w-[70%] break-words">{m.content}</div>
                                </div>
                            </div>
                        </div>
                    );
                    if (!m.owner) return (
                        <div className="shrink-0 flex flex-row gap-sm" key={m.id}>
                            <div className=" w-fit h-full">
                                <div className="p-sm bg-amber-950 w-sm h-sm aspect-square rounded-full flex justify-center items-center">L</div>
                            </div>
                            <div className="flex-1 min-w-0 shrink-0  flex flex-col gap-sm">
                                <div className="flex-1 w-full px-sm flex flex-row justify-between gap-md">
                                    <div className="text-caption">lahiru</div>
                                    <div className="text-caption flex flex-row gap-sm ">
                                        <div className="text-caption text-nowrap">{formatRelativeTime(m.time)}</div>
                                        {m.edited && <div className="text-input-placeholder">edited</div>}
                                    </div>
                                </div>
                                <div className="flex-5  max-w-full w-full rounded-2xl flex justify-start">
                                    <div className="bg-amber-600 p-sm max-w-[70%] rounded-2xl text-body break-words">{m.content}</div>
                                </div>
                            </div>
                        </div>
                    );
                    return <div></div>
                })}
                {messages.length === 0 && <div className="h-full w-full flex items-center justify-center flex-col gap-sm">
                    <Image src="/images/notFound.svg" alt="no messages" width={100} height={100} className="mx-auto my-8" />
                    {messageLoading && <div><ClipLoader color="#4A4A4A"/></div>}
                    <h1 className="text-body">No messages found</h1>
                </div>
                }
                <div ref={bottomRef}></div>
            </div>
            <div className="min-h-0 h-fit w-full px-sm py-md gap-sm flex flex-row items-center justify-center">
                <textarea className="resize-none bg-input-bg  md:px-md text-body flex-1 p-sm rounded-2xl break-words placeholder:text-input-placeholder border-input-border focus-within:border-primary-hover focus:border-none focus:border-1 focus:outline-none" placeholder="Type a message..." value={message} onChange={handleTextAreaChange} onKeyDown={handleKeyDown} ref={textAreaRef}></textarea>
                <div className="bg-input-bg p-sm rounded-2xl cursor-pointer hover:brightness-50 flex justify-center items-center" onClick={handleTextMessageSend}>
                    <SendHorizonal />
                </div>
            </div>
        </div>
    );
}

export default MessageBox;