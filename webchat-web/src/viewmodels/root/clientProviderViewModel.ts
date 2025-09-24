import { store } from "@/app/store";
import { setLoggedIn } from "@/features/auth/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useClientProviderViewModel() {
    const router = useRouter();
    const pathname = usePathname();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fn = async () => {
            document.documentElement.setAttribute("data-theme", "dark");
            const token = localStorage.getItem("token");
            if (token != null) {
                try {
                    const value = jwtDecode(token);
                    if (value.sub != null) {
                        store.dispatch(setLoggedIn({ username: value.sub as string }));
                        router.replace("/home")
                    }
                }
                catch (e) {
                    localStorage.removeItem("token");
                    if (pathname === "/home") {
                        router.replace("/")
                    }
                }

            }
            else {
                if (pathname === "/home") {
                    router.replace("/")
                }
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            setReady(true);
        }
        fn()
    }, [])


    useEffect(() => {
        if (!ready) return;
        const state = store.getState();
        const loggedIn = state.auth.loggedIn;

        if (!loggedIn && pathname === "/home") {
            router.replace("/")
        }
        if (loggedIn && pathname !== "/home") {
            router.replace("/home")
        }
    }, [ready, router, pathname])

    return { ready }
}