"use client";

import useBreakpoint, { Breakpoint } from "@/hooks/useBreakpoint";
import SmHomePage from "./components/sm/smHomePage";
import MdHomePage from "./components/md/mdHomePage";
import useHomePageViewModel from "@/viewmodels/home/useHomePageViewModel";
import TitleLoadingPage from "@/components/loadingPages/TitleLoadingPage";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const HomePage = () => {
    const { loading, activeRoomId, recentRooms, rooms, searchText, setSearchText, setActiveRoomId } = useHomePageViewModel();
    const { breakpoint } = useBreakpoint();

    if (loading) return <TitleLoadingPage title="Home Page is loading...." />
    return breakpoint === "xs" ? <SmHomePage onRoomClick={setActiveRoomId} rooms={rooms} recentRooms={recentRooms} searchText={searchText} setSearchText={setSearchText} /> : <MdHomePage onRoomClick={setActiveRoomId} rooms={rooms} recentRooms={recentRooms} searchText={searchText} setSearchText={setSearchText} />;
}

export default HomePage;