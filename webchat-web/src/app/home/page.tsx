"use client";

import SideBar from "@/components/home/SideBar";
import { Menu } from "lucide-react";
import { useState } from "react";

const rooms = [
    { id: 0, roomName: "ManMagemanika" },
    { id: 1, roomName: "General" },
    { id: 2, roomName: "Tech Talk" },
    { id: 3, roomName: "Random" },
];

const HomePage = () => {
    const [folded, setFolded] = useState(true);
    return (
        <div className="p-4 w-full  h-screen bg-gray-950">
            <div className="w-full h-full grid grid-rows-[1fr_14fr] rounded-lg overflow-hidden">
                <nav className="flex flex-row w-full ">
                    <div className="w-20 h-full rounded-r-lg flex items-center justify-center cursor-pointer" onClick={() => setFolded(!folded)}>
                        <Menu size={29} color="#ffffff"></Menu>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <h1 className="text-white font-bold text-2xl"><span className="text-blue-500">W</span>eb<span className="text-purple-500">C</span>hat</h1>
                    </div>
                </nav>
                <div className="flex flex-row w-full">
                    <SideBar folded={folded} onAddRoomClick={() => { console.log("add Room") }} rooms={rooms} onRoomClick={(id) => { console.log(id) }}></SideBar>
                    <div className="flex-5 bg-gray-800 rounded-2xl"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;