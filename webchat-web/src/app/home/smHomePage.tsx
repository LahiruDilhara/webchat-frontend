import SearchInput from "@/components/primitive/SearchInput";
import { Plus } from "lucide-react";

const SmHomePage = () => {
    return (
        <div className="w-full h-full grid grid-rows-[1fr_1fr_7fr] gap-md py-md">
            <div className="flex flex-col gap-sm">
                <h1 className="text-h2">Chat</h1>
                <div className="w-full flex items-center justify-center">
                    <SearchInput placeholder="Search..." value="" onChange={(val) => console.log(val)} className=" w-full" />
                </div>
            </div>
            <div className="w-full flex flex-row gap-md overflow-x-auto">
                <div className="flex flex-col justify-center items-center text-center  cursor-pointer">
                    <div className="shrink-0 size-2xl flex justify-center items-center border-2 border-primary hover:bg-primary rounded-full">
                        <Plus size={16}></Plus>
                    </div>
                    <h1 className="text-caption text-nowrap">add room</h1>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                    <h1 className="text-caption text-nowrap truncate w-15">room 1</h1>
                </div>
            </div>
            <div className="flex flex-col min-h-0">
                <h1 className="text-h3 pb-sm">Rooms</h1>
                <div className="flex flex-col gap-lg overflow-y-scroll min-h-0">
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                    <div className="w-full shrink-0 flex flex-row gap-md min-h-0">
                        <div className="shrink-0 size-2xl bg-amber-200 rounded-full"></div>
                        <div className="w-full flex flex-row justify-between">
                            <div>
                                <h1 className="text-body">room 1</h1>
                                <h1 className="text-caption">private</h1>
                            </div>
                            <h1 className="text-caption">2025/12/08</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmHomePage;