import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import { createSlice } from "@reduxjs/toolkit";

interface MultiUserRoomState {
    multiUserRooms: MultiUserRoomDetailsResponseDTO[];
}

const initialState: MultiUserRoomState = {
    multiUserRooms: [],
};

const multiUserRoomSlice = createSlice({
    name: 'multiUserRoom',
    initialState,
    reducers: {
        addOrReplaceMultiUserRoom(state, action: { payload: MultiUserRoomDetailsResponseDTO }) {
            state.multiUserRooms = addOrReplaceMultiUserRoomDetailsResponseDTOToList(state.multiUserRooms, action.payload);
        },
        removeMultiUserRoom(state, action: { payload: number }) {
            state.multiUserRooms = state.multiUserRooms.filter(room => room.id !== action.payload);
        }
    }
});


export const { addOrReplaceMultiUserRoom, removeMultiUserRoom } = multiUserRoomSlice.actions;
export default multiUserRoomSlice.reducer;

function addOrReplaceMultiUserRoomDetailsResponseDTOToList(list: MultiUserRoomDetailsResponseDTO[], room: MultiUserRoomDetailsResponseDTO): MultiUserRoomDetailsResponseDTO[] {
    const nextRoomIndex = list.findIndex(r => r.id >= room.id)
    if (nextRoomIndex === -1) {
        list.push(room);
        return list;
    }
    if (list[nextRoomIndex].id === room.id) {
        list[nextRoomIndex] = room;
        return list;
    }
    list.splice(nextRoomIndex, 0, room);
    return list;
}
