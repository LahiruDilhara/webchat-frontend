import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import useLimitStack from "@/hooks/primitive/useLimitStack";
import useUserJoinedRoomsQuery from "@/hooks/react-query/useUserJoinedRoomsQuery";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function useHomePageViewModel(activeRoomId: string | null) {

    const { stack: recentRooms, addItem, setStackDirectly } = useLimitStack<MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO>(10);
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

    const prevStackRef = useRef(recentRooms);

    useLayoutEffect(() => {
        console.log(rooms);
        const prevStack = prevStackRef.current;
        const newStack = prevStack.filter(r => rooms.some(nr => nr.id === r.id));
        setStackDirectly(newStack);
        setSearchedRooms(rooms);
        setSearchText("");
    }, [rooms]);

    useEffect(() => {
        if (!activeRoomId) return;
        const room = rooms.find(r => r.id === activeRoomId);
        if (room) {
            addItem(room);
        }
    }, [activeRoomId])


    return {
        loading: isLoading,
        searchText,
        setSearchText: onSearchTextChange,
        rooms: searchedRooms,
        recentRooms,
    };
}