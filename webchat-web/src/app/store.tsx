import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/AuthSlice";
import dualUserRoomReducer from "../slices/room/DualUserRoomSlice";
import multiUserRoom from "../slices/room/MultiUserRoomSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dualUserRoom: dualUserRoomReducer,
        multiUserRoom: multiUserRoom,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;