import { store } from "@/app/store";
import { setLoggedIn } from "@/features/auth/AuthSlice";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useApplicationInitializer() {
    const [isReady, setIsReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const [title, setTitle] = useState("Loading...");
    const router = useRouter();

    const tasks: ({ description: string, runnable: () => Promise<void> })[] = [
        { description: "Setting up the theme", runnable: setTheme },
        { description: "Setting up login", runnable: setLogin },
    ];

    useEffect(() => {
        (async () => {
            setProgress(() => 0);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            for (let i = 0; i < tasks.length; i++) {
                setTitle(() => tasks[i].description);
                await tasks[i].runnable();
                setProgress(() => ((i + 1) / tasks.length) * 1000);
            }
            setTitle("Ready.....");
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsReady(true);
            router.replace("/home");
        })();
    });


    return { isReady, progress, title };
}

async function setTheme() {
    document.documentElement.setAttribute("data-theme", "dark");
}

async function setLogin() {
    const token = localStorage.getItem("token");
    if (token != null) {
        const value = jwtDecode(token);
        if (value.sub != null) {
            store.dispatch(setLoggedIn({ username: value.sub as string }));
        }
    }
}