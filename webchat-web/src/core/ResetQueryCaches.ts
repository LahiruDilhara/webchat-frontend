import { queryClient } from "@/lib/QueryClient";
import QueryKeys from "./QueryKeys";

export default function resetQueryCaches() {
    queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === QueryKeys.USER_ROOMS
    });
    queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === QueryKeys.PUBLIC_ROOMS
    });
}