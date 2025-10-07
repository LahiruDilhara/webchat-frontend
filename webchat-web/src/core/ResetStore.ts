import { store } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";


export function resetAllReduxData() {
    console.log("set logout")
    store.dispatch(setLoggedOut())
}