import useJoinRoomViewModel from "@/viewmodels/home/useJoinRoomViewModel";
import { Search } from "lucide-react";
import FoldableRoomItem from "./FoldableRoomItem";

const JoinRoom = () => {
    const { hasMore, isFetching, isLoading, onNextPage, page, rooms, searchText, setPage, setSearchText } = useJoinRoomViewModel();
    return (
        <main className="bg-background h-full py-md md:rounded-xl flex gap-md flex-col">
            <div className="w-full flex flex-row items-center gap-sm bg-input-bg px-md rounded-2xl">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="w-full py-md rounded-2xl text-button placeholder:text-input-placeholder focus:border-none focus:outline-none" placeholder="Search the room name"></input>
                <Search />
            </div>
            <div className="h-full flex-1 flex flex-col gap-md overflow-y-auto">
                {rooms.map((room) => <FoldableRoomItem key={room.id} closed={room.closed.toString()} createdAt={room.createdAt} name={room.name} onJoin={() => { }} roomId={room.id} memeberCount={room.memberCount} />)}
                {hasMore && <h1 className="text-body text-input-placeholder cursor-pointer" onClick={onNextPage}>Load more ....</h1>}
            </div>
        </main>
    );
}

export default JoinRoom;
