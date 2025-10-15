import QueryKeys from "@/core/QueryKeys";
import MultiUserRoomResponseDTO from "@/dto/room/MultiUserRoomResponseDTO";
import useDebounce from "@/hooks/primitive/useDebounce";
import { queryClient } from "@/lib/QueryClient";
import RoomService from "@/services/RoomService";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useJoinRoomViewModel() {
    const [searchText, setSearchText] = useState<string>("");
    const deboundedSearchText = useDebounce(searchText, 290);
    const pageSize = 10;

    const searchRooms = useInfiniteQuery({
        queryKey: [QueryKeys.PUBLIC_ROOMS, deboundedSearchText],
        queryFn: async ({ pageParam = 0 }) => {
            return await RoomService.getPublicRooms(deboundedSearchText, pageParam, pageSize);
        },
        getNextPageParam: (lastPage, allPages) => {
            if (lastPage.length < pageSize) return undefined;
            return allPages.length;
        },
        initialPageParam: 0,
        staleTime: 5 * 60 * 1000,
    });

    const joinToRoom = useMutation({
        mutationFn: RoomService.joinToRoom,
        onSuccess: () => {
            toast.success("Joined to room successfully");
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

    const onNextPage = searchRooms.fetchNextPage;
    const rooms = searchRooms.data?.pages.flat() || [];
    const hasMore = searchRooms.hasNextPage || false;
    const isFetching = searchRooms.isFetchingNextPage
    const isLoading = searchRooms.isPending;

    const onJoin = (roomId: string) => {
        joinToRoom.mutate(roomId);
    }


    return {
        searchText,
        setSearchText,
        onNextPage,
        rooms,
        hasMore,
        onJoin,
        isLoading,
        isFetching,
    }
}