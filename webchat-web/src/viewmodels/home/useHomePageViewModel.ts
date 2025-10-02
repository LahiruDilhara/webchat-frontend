import { RootState } from "@/app/store";
import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import useLimitStack from "@/hooks/useLimitStack";
import RoomService from "@/services/RoomService";
import { addOrReplaceDualUserRoom } from "@/slices/room/DualUserRoomSlice";
import { addOrReplaceMultiUserRoom } from "@/slices/room/MultiUserRoomSlice";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useHomePageViewModel() {

    const reduxDispatcher = useDispatch();
    const { stack: recentRooms, addItem } = useLimitStack<MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO>(10);
    const dualUserRooms = useSelector((state: RootState) => state.dualUserRoom.dualUserRooms);
    const multiUserRooms = useSelector((state: RootState) => state.multiUserRoom.multiUserRooms);
    const allRooms = [...dualUserRooms, ...multiUserRooms];
    const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
    const [searchText, setSearchText] = useState<string>("");
    const [searchedRooms, setSearchedRooms] = useState<(MultiUserRoomDetailsResponseDTO | DualUserRoomDetailsResponseDTO)[]>(allRooms);

    const fetchUserRooms = useQuery({
        queryKey: ['userRooms'],
        queryFn: RoomService.getUserJoinedRooms,
        retry: 2
    });

    useEffect(() => {
        if (!fetchUserRooms.data) return;
        fetchUserRooms.data.forEach(room => {
            if (room.type === "DualUserRoom") {
                reduxDispatcher(addOrReplaceDualUserRoom(room as DualUserRoomDetailsResponseDTO));
            }
            else if (room.type === "MultiUserRoom") {
                reduxDispatcher(addOrReplaceMultiUserRoom(room as MultiUserRoomDetailsResponseDTO))
            }
        })
    }, [fetchUserRooms.data]);

    const onSearchTextChange = (text: string) => {
        setSearchText(text);
        if (text.trim() === "") {
            setSearchedRooms(allRooms);
        }
        else {
            const lowerText = text.toLowerCase();
            const filteredRooms = allRooms.filter(room => room.name.toLowerCase().includes(lowerText));
            setSearchedRooms(filteredRooms);
        }
    }

    useEffect(() => {
        setSearchedRooms(allRooms);
        setSearchText("");
    }, [dualUserRooms, multiUserRooms]);


    const onRoomClick = (roomId: string) => {
        setActiveRoomId(roomId);
        const room = allRooms.find(r => r.id === roomId);
        if (room) {
            addItem(room);
        }
    }

    const loading = fetchUserRooms.isLoading;

    return { loading, searchText, setSearchText: onSearchTextChange, rooms: searchedRooms, activeRoomId, setActiveRoomId: onRoomClick, recentRooms };
}