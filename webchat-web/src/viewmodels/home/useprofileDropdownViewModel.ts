import { RootState } from "@/app/store";
import { setLoggedOut } from "@/slices/auth/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

export function useProfileDropdownViewModel() {

    const reduxDispatcher = useDispatch();

    const logOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            reduxDispatcher(setLoggedOut())
        }
    }

    return { logOut }
}