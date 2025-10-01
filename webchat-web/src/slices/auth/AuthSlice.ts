import { capitalizeFirstLetter } from "@/utils/TextUtil";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    username: string;
    loggedIn: boolean;
}

const initialState: UserState = {
    username: '',
    loggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn(state, action: PayloadAction<{ username: string }>) {
            state.username = capitalizeFirstLetter(action.payload.username);
            state.loggedIn = true;
        },
        setLoggedOut(state) {
            state.username = '';
            state.loggedIn = false;
        }
    },
})

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;