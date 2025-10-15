"use client";

import useBreakpoint, { Breakpoint } from "@/hooks/primitive/useBreakpoint";
import SmHomePage from "./components/sm/smHomePage";
import MdHomePage from "./components/md/mdHomePage";
import useHomePageViewModel from "@/viewmodels/home/useHomePageViewModel";
import TitleLoadingPage from "@/components/loadingPages/TitleLoadingPage";
import useRoomMessageViewModel from "@/viewmodels/home/useRoomMessageViewMode";

const HomePage = () => {
    const { activeRoomId, onRoomJoin, onRoomLeave,onSendTextMessage } = useRoomMessageViewModel();
    const { loading, recentRooms, rooms, searchText, setSearchText } = useHomePageViewModel(activeRoomId);
    const { breakpoint } = useBreakpoint();

    if (loading) return <TitleLoadingPage title="Home Page is loading...." />
    return (
        <div className="w-full h-full">
            {breakpoint === "xs" ?
                <SmHomePage
                    activeRoomId={activeRoomId}
                    rooms={rooms}
                    recentRooms={recentRooms}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    onRoomJoin={onRoomJoin}
                    onRoomLeave={onRoomLeave}
                    onTextMessageSend={onSendTextMessage}
                /> :
                <MdHomePage
                    activeRoomId={activeRoomId}
                    rooms={rooms}
                    recentRooms={recentRooms}
                    searchText={searchText}
                    setSearchText={setSearchText}
                    onRoomJoin={onRoomJoin}
                    onRoomLeave={onRoomLeave}
                    onTextMessageSend={onSendTextMessage}
                />}
        </div>

    );
}

export default HomePage;