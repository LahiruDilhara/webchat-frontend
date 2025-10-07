import { RootState } from "@/app/store";
import resetQueryCaches from "@/core/ResetQueryCaches";
import { resetAllReduxData } from "@/core/ResetStore";
import { queryClient } from "@/lib/QueryClient";

export function useProfileDropdownViewModel() {

    const logOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token");
            resetAllReduxData();
            queryClient.clear();
        }
    }

    return { logOut }
}