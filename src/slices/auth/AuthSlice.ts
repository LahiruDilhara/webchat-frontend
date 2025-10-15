import { capitalizeFirstLetter } from "@/utils/TextUtil";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string;
    loggedIn: boolean;
    token: string
}

const initialState: UserState = {
    username: '',
    loggedIn: false,
    token: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn(state, action: PayloadAction<{ username: string, token: string }>) {
            state.username = capitalizeFirstLetter(action.payload.username);
            state.loggedIn = true;
            state.token = action.payload.token;
        },
        setLoggedOut(state) {
            state.username = '';
            state.loggedIn = false;
            state.token = '';
        }
    },
})

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;