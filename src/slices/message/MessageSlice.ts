import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
    id: string;
    type: string;
    content: string;
    sender: string;
    time: string; // ISO or parseable date string
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
            if (!state.rooms[roomId]) state.rooms[roomId] = [];

            const exists = state.rooms[roomId].some(m => m.id === message.id);
            if (!exists) {
                const nextIndex = state.rooms[roomId].findIndex(m => new Date(m.time).getTime() > new Date(message.time).getTime());
                if (nextIndex === -1) state.rooms[roomId].push(message);
                else state.rooms[roomId].splice(nextIndex, 0, message);
            }
        },

        addOrReplaceMessage(state, action: PayloadAction<{ roomId: string, message: Message }>) {
            const { roomId, message } = action.payload;
            if (!state.rooms[roomId]) state.rooms[roomId] = [];

            const index = state.rooms[roomId].findIndex(m => m.id === message.id);
            if (index === -1) {
                const nextIndex = state.rooms[roomId].findIndex(m => new Date(m.time).getTime() > new Date(message.time).getTime());
                if (nextIndex === -1) state.rooms[roomId].push(message);
                else state.rooms[roomId].splice(nextIndex, 0, message);
            } else {
                state.rooms[roomId][index] = message;
            }
        },

        addMessage(state, action: PayloadAction<{ roomId: string, message: Message }>) {
            const { roomId, message } = action.payload;
            if (!state.rooms[roomId]) state.rooms[roomId] = [];

            const nextIndex = state.rooms[roomId].findIndex(m => new Date(m.time).getTime() > new Date(message.time).getTime());
            if (nextIndex === -1) state.rooms[roomId].push(message);
            else state.rooms[roomId].splice(nextIndex, 0, message);
        },

        updateMessageByID(state, action: PayloadAction<{ roomId: string, messageId: string, newMessage: Message }>) {
            const { roomId, messageId, newMessage } = action.payload;
            if (!state.rooms[roomId]) return;

            const index = state.rooms[roomId].findIndex(m => m.id === messageId);
            if (index !== -1) {
                state.rooms[roomId].splice(index, 1); // remove old
                const nextIndex = state.rooms[roomId].findIndex(m => new Date(m.time).getTime() > new Date(newMessage.time).getTime());
                if (nextIndex === -1) state.rooms[roomId].push(newMessage);
                else state.rooms[roomId].splice(nextIndex, 0, newMessage);
            }
        },

        clearMessages(state, action: PayloadAction<{ roomId: string }>) {
            const { roomId } = action.payload;
            state.rooms[roomId] = [];
        },

        removeMessage(state, action: PayloadAction<{ roomId: string, messageId: string }>) {
            const { roomId, messageId } = action.payload;
            if (!state.rooms[roomId]) return;
            state.rooms[roomId] = state.rooms[roomId].filter(m => m.id !== messageId);
        },

        removeMessageFromUUID(state, action: PayloadAction<{ uuid: string, roomId: string }>) {
            const { uuid, roomId } = action.payload;
            if (!state.rooms[roomId]) return;
            state.rooms[roomId] = state.rooms[roomId].filter(m => m.uuid !== uuid);
        },

        replaceMessageByUUID(state, action: PayloadAction<{ uuid: string, roomId: string, newMessage: Message }>) {
            const { uuid, roomId, newMessage } = action.payload;
            if (!state.rooms[roomId]) return;

            const index = state.rooms[roomId].findIndex(m => m.uuid === uuid);
            if (index !== -1) {
                state.rooms[roomId].splice(index, 1); // remove old
                const nextIndex = state.rooms[roomId].findIndex(m => new Date(m.time).getTime() > new Date(newMessage.time).getTime());
                if (nextIndex === -1) state.rooms[roomId].push(newMessage);
                else state.rooms[roomId].splice(nextIndex, 0, newMessage);
            }
        },
        resetMessages(state) {
            state.rooms = {};
        },
    },
});

export const { 
    clearMessages,
    removeMessage,
    removeMessageFromUUID,
    addMessage,
    replaceMessageByUUID,
    addMessageIfIdNotExists,
    updateMessageByID,
    addOrReplaceMessage,
    resetMessages
} = messageSlice.actions;

export default messageSlice.reducer;