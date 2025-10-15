import { store } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";
import { resetMessages } from "@/slices/message/MessageSlice";
import { resetRoomUnreadMessages } from "@/slices/room/RoomUnreadMessageSlice";


export function resetAllReduxData() {
    console.log("set logout")
    store.dispatch(setLoggedOut());
    store.dispatch(resetMessages());
    store.dispatch(resetRoomUnreadMessages());
}