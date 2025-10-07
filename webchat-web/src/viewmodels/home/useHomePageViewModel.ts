import { RootState } from "@/app/store";
import QueryKeys from "@/core/QueryKeys";
import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import useLimitStack from "@/hooks/primitive/useLimitStack";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
import RoomService from "@/services/RoomService";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useHomePageViewModel() {

    const { stack: recentRooms, addItem } = useLimitStack<MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO>(10);
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const { dualUserRooms, isLoading, multiUserRooms, rooms } = useUserJoinedRoomsQuery();
    const [searchedRooms, setSearchedRooms] = useState<(MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO)[]>(rooms);


    const fetchUserRooms = useQuery({
        queryKey: [QueryKeys.USER_ROOMS],
        queryFn: RoomService.getUserJoinedRooms,
        retry: 2,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    const onSearchTextChange = (text: string) => {
        setSearchText(text);
        if (text.trim() === "") {
            setSearchedRooms(rooms);
        }
        else {
            const lowerText = text.toLowerCase();
            const textLetters = lowerText.split("");
            const filteredRooms = rooms.filter(room => {
                const roomNameLetters = room.name.toLowerCase().split("");
                return textLetters.every(letter => roomNameLetters.includes(letter));
            });
            setSearchedRooms(filteredRooms);
        }
    }

    useEffect(() => {
        setSearchedRooms(rooms);
        setSearchText("");
    }, [dualUserRooms, multiUserRooms]);


    const onRoomClick = (roomId: string) => {
        setActiveRoomId(roomId);
        const room = rooms.find(r => r.id === roomId);
        if (room) {
            addItem(room);
        }
    }

    const loading = fetchUserRooms.isLoading;

    return {
        loading,
        searchText,
        setSearchText: onSearchTextChange,
        rooms: searchedRooms,
        activeRoomId,
        setActiveRoomId,
        recentRooms,
        onRoomClick
    };
}