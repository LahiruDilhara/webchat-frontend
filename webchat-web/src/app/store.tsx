import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/auth/AuthSlice";
import messageReducer from "../slices/message/MessageSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;