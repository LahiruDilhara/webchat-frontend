import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/AuthSlice";
import messageReducer from "../slices/message/MessageSlice";
import roomUnreadMessageReducer from "../slices/room/RoomUnreadMessageSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        roomUnreadMessage: roomUnreadMessageReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;