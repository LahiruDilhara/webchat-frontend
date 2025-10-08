import QueryKeys from "@/core/QueryKeys";
import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import RoomService from "@/services/RoomService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default function useUserJoinedRoomsQuery() {
    const fetchRooms = useQuery({
        queryKey: [QueryKeys.USER_ROOMS],
        queryFn: RoomService.getUserJoinedRooms,
        retry: 2,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    const rooms = useMemo(() => fetchRooms.data || [], [fetchRooms.data]);
    const dualUserRooms = useMemo(() => rooms.filter(room => room.type === "DualUserRoom") as DualUserRoomDetailsResponseDTO[], [rooms]);
    const multiUserRooms = useMemo(() => rooms.filter(room => room.type === "MultiUserRoom") as MultiUserRoomDetailsResponseDTO[], [rooms]);


    const isLoading = fetchRooms.isLoading;

    useEffect(() => {
        if (fetchRooms.error) {
            toast.error(fetchRooms.error.message)
        }
    }, [fetchRooms.error])

    return {
        dualUserRooms: dualUserRooms || [],
        multiUserRooms: multiUserRooms || [],
        rooms: rooms || [],
        isLoading
    }
}