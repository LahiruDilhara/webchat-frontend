import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import useLimitStack from "@/hooks/primitive/useLimitStack";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
import { useEffect, useState } from "react";

export default function useHomePageViewModel() {

    const { stack: recentRooms, addItem, resetStack } = useLimitStack<MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO>(10);
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const { rooms, isLoading } = useUserJoinedRoomsQuery();
    const [searchedRooms, setSearchedRooms] = useState<(MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO)[]>(rooms);

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
        resetStack();
    }, [rooms]);

    const onRoomClick = (roomId: string) => {
        setActiveRoomId(roomId);
        const room = rooms.find(r => r.id === roomId);
        if (room) {
            addItem(room);
        }
    }
    

    return {
        loading: isLoading,
        searchText,
        setSearchText: onSearchTextChange,
        rooms: searchedRooms,
        activeRoomId,
        setActiveRoomId,
        recentRooms,
        onRoomClick
    };
}