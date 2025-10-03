import { queryClient } from "@/lib/QueryClient";
import { QueryCache } from "@tanstack/react-query";
import QueryKeys from "./QueryKeys";

export default function resetQueryCaches() {
    QueryKeys.getKeys().forEach(key => {
        queryClient.removeQueries();
    })
}