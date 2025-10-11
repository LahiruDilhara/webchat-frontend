import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
    id: string;
    type: string;
    content: string;
    sender: string;
    time: string;
    roomId: string;
    edited: boolean;
    owner: boolean;
    uuid: string;
    pending?: boolean;
}

interface messageState {
    rooms: { [roomId: string]: Message[] };
}

const initialState: messageState = {
    rooms: {},
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessageIfIdNotExists(state, action: PayloadAction<{ roomId: string, message: Message }>) {
            const { roomId, message } = action.payload;
            if (!state.rooms[roomId]) {
                state.rooms[roomId] = [];
            }
            const exists = state.rooms[roomId].some(m => m.id === message.id);
            if (exists) return;
            state.rooms[roomId].push(message);
        },
        addOrReplaceMessage(state, action: PayloadAction<{ roomId: string, message: Message }>) {
            const { roomId, message } = action.payload;
            if (!state.rooms[roomId]) {
                state.rooms[roomId] = [];
            }
            const msgIndex = state.rooms[roomId].findIndex(m => m.id === message.id);
            if (msgIndex === -1) {
                state.rooms[roomId].push(message);
            } else {
                state.rooms[roomId][msgIndex] = message;
            }
        },
        addMessage(state, action: PayloadAction<{ roomId: string, message: Message }>) {
            const { roomId, message } = action.payload;
            if (!state.rooms[roomId]) {
                state.rooms[roomId] = [];
            }
            state.rooms[roomId].push(message);
        },
        updateMessageByID(state, action: PayloadAction<{ roomId: string, messageId: string, newMessage: Message }>) {
            const { roomId, messageId, newMessage } = action.payload;
            if (!state.rooms[roomId]) return;
            const msgIndex = state.rooms[roomId].findIndex(m => m.id === messageId);
            if (msgIndex === -1) return;
            state.rooms[roomId][msgIndex] = newMessage;
        },
        clearMessages(state, action: PayloadAction<{ roomId: string }>) {
            const { roomId } = action.payload;
            state.rooms[roomId] = [];
        },
        removeMessage(state, action: PayloadAction<{ roomId: string, messageId: string }>) {
            const { roomId, messageId } = action.payload;
            if (!state.rooms[roomId]) return;
            const msgIndex = state.rooms[roomId].findIndex(m => m.id === messageId);
            if (msgIndex === -1) return;
            state.rooms[roomId].splice(msgIndex, 1);
        },
        removeMessageFromUUID(state, action: PayloadAction<{ uuid: string, roomId: string }>) {
            const { uuid, roomId } = action.payload;
            if (!state.rooms[roomId]) return;
            const msgIndex = state.rooms[roomId].findIndex(m => m.uuid === uuid);
            if (msgIndex === -1) return;
            state.rooms[roomId].splice(msgIndex, 1);
        },
        replaceMessageByUUID(state, action: PayloadAction<{ uuid: string, roomId: string, newMessage: Message }>) {
            const { uuid, roomId, newMessage } = action.payload;
            if (!state.rooms[roomId]) return;
            const msgIndex = state.rooms[roomId].findIndex(m => m.uuid === uuid);
            if (msgIndex === -1) return;
            state.rooms[roomId][msgIndex] = newMessage;
        },
    },
})

export const { clearMessages, removeMessage, removeMessageFromUUID, addMessage, replaceMessageByUUID, addMessageIfIdNotExists, updateMessageByID, addOrReplaceMessage } = messageSlice.actions;
export default messageSlice.reducer;
