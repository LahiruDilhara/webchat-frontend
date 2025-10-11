import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state as a plain object mapping roomId to unread count
export interface RoomUnreadMessageState {
    roomUnreadMessages: Record<string, number>; // roomId -> unread count
}

const initialState: RoomUnreadMessageState = {
    roomUnreadMessages: {},
}

const roomUnreadMessageSlice = createSlice({
    name: 'roomUnreadMessage',
    initialState,
    reducers: {
        setUnreadMessageCount(state, action: PayloadAction<{ roomId: string, count: number }>) {
            const { roomId, count } = action.payload;
            state.roomUnreadMessages[roomId] = count;
        },
        incrementUnreadMessageCount(state, action: PayloadAction<{ roomId: string }>) {
            const { roomId } = action.payload;
            if (state.roomUnreadMessages[roomId] !== undefined) {
                state.roomUnreadMessages[roomId] += 1;
            } else {
                state.roomUnreadMessages[roomId] = 1;
            }
        },
        resetUnreadMessageCount(state, action: PayloadAction<{ roomId: string }>) {
            const { roomId } = action.payload;
            state.roomUnreadMessages[roomId] = 0;
        },
        resetRoomUnreadMessages(state) {
            state.roomUnreadMessages = {};
        }
    }
});

export const { setUnreadMessageCount, incrementUnreadMessageCount, resetUnreadMessageCount, resetRoomUnreadMessages } = roomUnreadMessageSlice.actions;
export default roomUnreadMessageSlice.reducer;