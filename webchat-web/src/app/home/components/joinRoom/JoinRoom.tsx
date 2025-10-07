import useJoinRoomViewModel from "@/viewmodels/home/useJoinRoomViewModel";
import { Search } from "lucide-react";
import FoldableRoomItem from "./FoldableRoomItem";
import { CircleLoader } from "react-spinners";
import Image from "next/image";

const JoinRoom = () => {
    const { hasMore, isFetching, isLoading, onNextPage, onJoin, page, rooms, searchText, setSearchText } = useJoinRoomViewModel();

    return (
        <main className="bg-background h-full w-full py-md md:rounded-xl flex gap-md sm:p-md flex-col overflow-hidden">
            <div className="w-full flex flex-row items-center gap-sm bg-input-bg px-md rounded-2xl">
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="w-full py-md rounded-2xl text-button placeholder:text-input-placeholder focus:border-none focus:outline-none" placeholder="Search the room name"></input>
                <Search />
            </div>
            <div className="h-full flex-1 flex flex-col gap-md overflow-y-auto">
                {isLoading && <div className="h-full flex items-center justify-center"><CircleLoader color="#4d4dff" size={100} /></div>}
                {!isLoading && <>
                    {rooms.map((room) => <FoldableRoomItem key={room.id} closed={room.closed.toString()} createdAt={room.createdAt} name={room.name} onJoin={() => { onJoin(room.id) }} roomId={room.id} memeberCount={room.memberCount} />)}
                    {isFetching ? <h1 className="text-body text-input-placeholder">Loading ....</h1> : hasMore && <h1 className="text-body text-input-placeholder cursor-pointer" onClick={onNextPage}>Load more ....</h1>}
                    {rooms.length === 0 &&
                        <div className="h-full w-full flex flex-col justify-center items-center gap-sm">
                            <Image src="/images/search.svg" alt="search image" width={100} height={100} />
                            <h1 className="text-caption">No Rooms available</h1>
                        </div>
                    }
                </>}
            </div>
        </main>
    );
}

export default JoinRoom;
