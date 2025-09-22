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
            <section className="grid grid-cols-20 transition-all h-full duration-300 min-h-0 gap-4">
                <div className={`${folded ? "lg:col-span-1 md:col-span-1 sm:col-span-2" : "lg:col-span-3 md:col-span-4 sm:col-span-5"} w-full min-h-0 h-full`}>
                    <SideBar folded={folded} onAddRoomClick={() => { console.log("add Room") }} rooms={rooms} onRoomClick={(id) => { console.log(id) }}></SideBar>
                </div>
                <div className={`bg-gray-800 rounded-2xl ${folded ? "lg:col-span-19 md:col-span-19 sm:col-span-18" : "lg:col-span-17 md:col-span-16 sm:col-span-15"} min-h-0`}></div>
            </section>
        </div>
    );
}

export default HomePage;