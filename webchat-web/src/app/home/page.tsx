"use client";

import SideBar from "@/components/home/SideBar";
import { Menu } from "lucide-react";
import { useState } from "react";

const rooms = [
    { id: 0, roomName: "ManMagemanika" },
    { id: 1, roomName: "General" },
    { id: 2, roomName: "Tech Talk" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
    { id: 3, roomName: "Random" },
];

const HomePage = () => {
    const [folded, setFolded] = useState(true);
    return (
        <div className="w-screen h-screen bg-gray-950 p-4 grid grid-rows-[1fr_20fr]">
            <nav className="grid grid-cols-[1fr_20fr]">
                <div className="rounded-r-lg flex items-center cursor-pointer" onClick={() => setFolded(!folded)}>
                    <Menu size={29} color="#ffffff"></Menu>
                </div>
                <div className="flex flex-1 h-full items-center justify-center">
                    <h1 className="text-white font-bold text-2xl"><span className="text-blue-500">W</span>eb<span className="text-purple-500">C</span>hat</h1>
                </div>
            </nav>
            <section className="grid grid-cols-12 transition-all duration-300">
                <div className={`${folded ? "col-span-1" : "col-span-2"} overflow-hidden w-full`}>
                    <div className="h-40 w-full bg-amber-800"></div>
                    <div className="h-40 w-full bg-amber-800"></div>
                    {/* <SideBar folded={folded} onAddRoomClick={() => { console.log("add Room") }} rooms={rooms} onRoomClick={(id) => { console.log(id) }}></SideBar> */}
                </div>
                <div className={`bg-gray-800 rounded-2xl ${folded ? "col-span-11" : "col-span-10"}`}></div>
            </section>
        </div>
    );
}

export default HomePage;