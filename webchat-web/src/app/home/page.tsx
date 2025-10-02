"use client";

import useBreakpoint, { Breakpoint } from "@/hooks/useBreakpoint";
import SmHomePage from "./components/sm/smHomePage";
import MdHomePage from "./components/md/mdHomePage";
import useHomePageViewModel from "@/viewmodels/home/useHomePageViewModel";
import TitleLoadingPage from "@/components/loadingPages/TitleLoadingPage";
import AddRoomOverlay from "./components/addRoom/AddRoomOverlay";
import { useState } from "react";

const HomePage = () => {
    const { loading, activeRoomId, recentRooms, rooms, searchText, setSearchText, setActiveRoomId } = useHomePageViewModel();
    const { breakpoint } = useBreakpoint();
    const [addRoom, setAddRoom] = useState(false);

    if (loading) return <TitleLoadingPage title="Home Page is loading...." />
    return (
        <div className="w-full h-full">
            {breakpoint === "xs" ?
                <SmHomePage
                    onRoomAddClick={() => setAddRoom(true)}
                    activeRoomId={activeRoomId}
                    onRoomClick={setActiveRoomId}
                    rooms={rooms}
                    recentRooms={recentRooms}
                    searchText={searchText}
                    setSearchText={setSearchText}
                /> :
                <MdHomePage
                    onRoomAddClick={() => setAddRoom(true)}
                    activeRoomId={activeRoomId}
                    onRoomClick={setActiveRoomId}
                    rooms={rooms}
                    recentRooms={recentRooms}
                    searchText={searchText}
                    setSearchText={setSearchText}
                />}
            {addRoom && <AddRoomOverlay onClose={() => setAddRoom(false)} />}
        </div>

    );
}

export default HomePage;