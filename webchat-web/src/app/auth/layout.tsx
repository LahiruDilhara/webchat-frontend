"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
    const router = useRouter();

    useEffect(() => {
        if (loggedIn) {
            router.replace("/home");
        }
    }, [loggedIn, router])
    return (<>{children}</>);
}

export default AuthLayout;