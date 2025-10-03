import { store } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";
import { resetDualUserRooms } from "@/slices/room/DualUserRoomSlice";
import { resetMultiUserRooms } from "@/slices/room/MultiUserRoomSlice";

export function resetRoomsReduxData() {
    console.log("resetting rooms redux data")
    store.dispatch(resetDualUserRooms());
    store.dispatch(resetMultiUserRooms());
}

export function resetAllReduxData() {
    console.log("set logout")
    store.dispatch(setLoggedOut())
    resetRoomsReduxData()
}