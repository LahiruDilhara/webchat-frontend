import { store } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";
import { resetMessages } from "@/slices/message/MessageSlice";


export function resetAllReduxData() {
    console.log("set logout")
    store.dispatch(setLoggedOut());
    store.dispatch(resetMessages());
}