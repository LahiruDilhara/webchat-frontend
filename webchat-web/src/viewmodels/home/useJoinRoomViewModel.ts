import QueryKeys from "@/core/QueryKeys";
import MultiUserRoomResponseDTO from "@/dto/room/MultiUserRoomResponseDTO";
import useDebounce from "@/hooks/useDebounce";
import RoomService from "@/services/RoomService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useJoinRoomViewModel() {
    const [searchText, setSearchText] = useState<string>("");
    const deboundedSearchText = useDebounce(searchText, 290);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState(true);
    const [rooms, setRooms] = useState<MultiUserRoomResponseDTO[]>([]);
    const pageSize = 10;

    const searchRooms = useQuery({
        queryKey: [QueryKeys.PUBLIC_ROOMS, deboundedSearchText, page],
        queryFn: () => RoomService.getPublicRooms(deboundedSearchText, page, pageSize),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })

    useEffect(() => {
        console.log(`searched rooms ${searchRooms.data?.length}`);
        console.log(`current page ${page}`);
        console.log(`current rooms ${rooms.length}`);
        if (!searchRooms.data) return;
        if (page === 0) {
            console.log("setting rooms")
            setHasMore(searchRooms.data.length === pageSize);
            setRooms(() => searchRooms.data);
        }
        else {
            setHasMore(searchRooms.data.length === pageSize);
            setRooms(prev => [...prev, ...searchRooms.data]);
        }
    }, [page, searchRooms.data])

    const onNextPage = () => {
        if (hasMore) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        setPage(0);
        setRooms(searchRooms.data || [])
        setHasMore(true);
    }, [deboundedSearchText])


    return {
        searchText,
        setSearchText,
        page,
        setPage,
        onNextPage,
        rooms,
        hasMore,
        isLoading: searchRooms.isLoading && page === 0,
        isFetching: searchRooms.isFetching && page > 0,
    }
}