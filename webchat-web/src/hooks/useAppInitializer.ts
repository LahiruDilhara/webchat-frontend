import { store } from "@/app/store";
import { setLoggedIn } from "@/features/auth/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

export function useApplicationInitializer() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTheme();
        setLogin();
        setIsReady(false);
    }, []);


    return { isReady };
}

function setTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
}

function setLogin() {
    const token = localStorage.getItem("token");
    if (token != null) {
        const value = jwtDecode(token);
        if (value.sub != null) {
            store.dispatch(setLoggedIn({ username: value.sub as string }));
        }
    }
}