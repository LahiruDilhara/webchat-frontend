import QueryKeys from "@/core/QueryKeys";
import MultiUserRoomResponseDTO from "@/dto/room/MultiUserRoomResponseDTO";
import useDebounce from "@/hooks/primitive/useDebounce";
import { queryClient } from "@/lib/QueryClient";
import RoomService from "@/services/RoomService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
        if (!searchRooms.data) return;
        if (page === 0) {
            setRooms(() => searchRooms.data);
        }
        else {
            setRooms(prev => [...prev, ...searchRooms.data]);
        }
    }, [page, searchRooms.data])

    const joinToRoom = useMutation({
        mutationFn: RoomService.joinToRoom,
        onSuccess: () => {
            toast.success("Joined to room successfully");
            setPage(0);
            setRooms([]);
            queryClient.invalidateQueries({
                predicate: (query) => query.queryKey[0] === QueryKeys.PUBLIC_ROOMS
            });
            queryClient.invalidateQueries({
                predicate: (query) => query.queryKey[0] === QueryKeys.USER_ROOMS
            });
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    useEffect(() => {
        if (!searchRooms.data) {
            setHasMore(false);
            return;
        }
        setHasMore(searchRooms.data.length === pageSize);
    }, [searchRooms.data])

    const onNextPage = () => {
        if (hasMore) {
            setPage(prev => prev + 1);
        }
    }

    useEffect(() => {
        setPage(0);
        setRooms(searchRooms.data || [])
    }, [deboundedSearchText])

    const onJoin = (roomId: string) => {
        joinToRoom.mutate(roomId);
    }


    return {
        searchText,
        setSearchText,
        page,
        onNextPage,
        rooms,
        hasMore,
        onJoin,
        isLoading: searchRooms.isLoading && page === 0,
        isFetching: searchRooms.isFetching && page > 0,
    }
}