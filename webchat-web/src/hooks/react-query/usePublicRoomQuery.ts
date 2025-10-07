import { useQuery } from "@tanstack/react-query";
import useDebounce from "../primitive/useDebounce";
import RoomService from "@/services/RoomService";
import { useEffect, useState } from "react";
import MultiUserRoomResponseDTO from "@/dto/room/MultiUserRoomResponseDTO";
import QueryKeys from "@/core/QueryKeys";

export default function usePublicRoomQuery(searchText: string, pageSize: number = 10) {
    const debouncedText = useDebounce(searchText, 290);
    const [rooms, setRooms] = useState<MultiUserRoomResponseDTO[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState<number>(0);

    const searchRooms = useQuery({
        queryKey: [QueryKeys.PUBLIC_ROOMS, debouncedText, page],
        queryFn: () => RoomService.getPublicRooms(debouncedText, page, pageSize),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })

    useEffect(() => {
        if (!searchRooms.data) return;
        if (page === 0) {
            setRooms(() => searchRooms.data);
        }
        else {
            setRooms(prev => [...prev, ...searchRooms.data]);
        }
    }, [page, searchRooms.data])

    useEffect(() => {
        if (!searchRooms.data) {
            setHasMore(false);
            return;
        }
        setHasMore(searchRooms.data.length === pageSize);
    }, [searchRooms.data])

    useEffect(() => {
        setPage(0);
        setRooms(searchRooms.data || [])
    }, [debouncedText])

    const onNextPage = () => {
        if (hasMore) {
            setPage(prev => prev + 1);
        }
    }

    return {
        rooms,
        hasMore,
        onNextPage,
        searchRooms,
        isLoading: searchRooms.isLoading && page === 0,
        isFetching: searchRooms.isFetching && page > 0,
    };


}