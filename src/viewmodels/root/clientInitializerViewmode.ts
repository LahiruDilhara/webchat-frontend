import PageRoutes from "@/app/pageRoutes";
import { RootState } from "@/app/store";
import { setLoggedIn, setLoggedOut } from "@/slices/auth/AuthSlice";
import { getTokenUser } from "@/utils/jwtUtil";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useClientInitializerViewModel() {
    const isUserLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);
    const windowPathName = usePathname();
    const router = useRouter();
    const [ready, setReady] = useState(false);
    const reduxDispatcher = useDispatch();

    // initialize the application state
    useLayoutEffect(() => {
        const fn = async () => {
            document.documentElement.setAttribute("data-theme", "dark");
            const token = localStorage.getItem("token");
            if (token == null) {
                reduxDispatcher(setLoggedOut())
            }
            else {
                const user = getTokenUser(token);
                if (user == null) {
                    localStorage.removeItem("token");
                    reduxDispatcher(setLoggedOut());
                }
                else {
                    reduxDispatcher(setLoggedIn({ username: user, token: token }))
                }
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            setReady(true);
        }
        fn();
    }, [])


    useLayoutEffect(() => {
        if (!ready) return; // wait until the initialization is done to redirect the user
        if (isUserLoggedIn) {
            if (windowPathName.startsWith("/auth")) {
                console.log("redirecting to /home");
                router.replace(PageRoutes.HOME);
            }
        }
        else {
            if (windowPathName.startsWith("/home")) {
                console.log("redirecting to /");
                router.replace(PageRoutes.ROOT);
            }
        }
    }, [windowPathName, router, isUserLoggedIn, ready])



    return { ready }
}

