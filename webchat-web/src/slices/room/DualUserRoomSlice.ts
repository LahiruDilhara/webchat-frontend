import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import { createSlice } from "@reduxjs/toolkit";

interface DualUserRoomState {
    dualUserRooms: DualUserRoomDetailsResponseDTO[];
}

const initialState: DualUserRoomState = {
    dualUserRooms: [],
};

const dualUserRoomSlice = createSlice({
    name: 'dualUserRoom',
    initialState,
    reducers: {
        addOrReplaceDualUserRoom(state, action: { payload: DualUserRoomDetailsResponseDTO }) {
            state.dualUserRooms = addOrReplaceDualUserRoomDetailsResponseDTOToList(state.dualUserRooms, action.payload);
        },
        removeDualUserRoom(state, action: { payload: number }) {
            state.dualUserRooms = state.dualUserRooms.filter(room => room.id !== action.payload);
        }
    }
});


export const { addOrReplaceDualUserRoom, removeDualUserRoom } = dualUserRoomSlice.actions;
export default dualUserRoomSlice.reducer;

function addOrReplaceDualUserRoomDetailsResponseDTOToList(list: DualUserRoomDetailsResponseDTO[], room: DualUserRoomDetailsResponseDTO): DualUserRoomDetailsResponseDTO[] {
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
