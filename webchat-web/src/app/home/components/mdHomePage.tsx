import SearchInput from "@/components/primitive/SearchInput";
import { Menu, Plus } from "lucide-react";
import { useState } from "react";

const MdHomePage = () => {
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
                                <div className="shrink-0 size-2xl flex justify-center items-center border-2 border-primary hover:bg-primary rounded-full cursor-pointer">
                                    <Plus size={16}></Plus>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                            <div className="flex flex-row justify-center items-center text-center bg-gray-800 p-sm rounded-2xl">
                                <div className="shrink-0 size-lg bg-amber-200 rounded-full"></div>
                                <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`grid gap-lg pt-lg ${folded ? "grid-cols-1" : "grid-cols-[2fr_7fr]"} h-full overflow-hidden`}>
                {!folded && (
                    <div className="flex flex-col min-h-0 min-w-0 gap-md">
                        <h1 className="text-body">Rooms</h1>
                        <div className="w-full flex items-center justify-center">
                            <SearchInput placeholder="Search..." value="" onChange={(val) => console.log(val)} className=" w-full" />
                        </div>
                        <div className="flex flex-col gap-lg overflow-y-scroll ">
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full shrink-0 flex flex-row gap-md min-h-0 bg-card-bg p-sm rounded-lg cursor-pointer">
                                <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                                <div className="w-full flex flex-col justify-between">
                                    <h1 className="text-body">room 1</h1>
                                    <div className="flex flex-row justify-between w-full">
                                        <h1 className="text-caption hidden lg:block">private</h1>
                                        <h1 className="text-caption">2025/12/08</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
                <div className="w-full h-full rounded-lg bg-card-bg"></div>
            </div>
        </div>
    );
}

export default MdHomePage;
