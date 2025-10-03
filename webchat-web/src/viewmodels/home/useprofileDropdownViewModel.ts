import { RootState } from "@/app/store";
import resetQueryCaches from "@/core/ResetQueryCaches";
import { resetAllReduxData } from "@/core/ResetStore";

export function useProfileDropdownViewModel() {

    const logOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            console.log("removing redux data")
            resetAllReduxData();
            resetQueryCaches();
        }
    }

    return { logOut }
}