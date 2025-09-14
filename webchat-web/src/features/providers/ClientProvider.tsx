"use client";

import { store } from "@/app/store";
import { jwtDecode } from "jwt-decode";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { setLoggedIn } from "../auth/AuthSlice";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // set the theme to dark
        document.documentElement.setAttribute("data-theme", "dark");

        // get the token from the localstorage. set logged in if token is available
        const token = localStorage.getItem("token");
        if (token != null) {
            const value = jwtDecode(token);
            if (value.sub != null) {
                store.dispatch(setLoggedIn({ username: value.sub as string }));
            }
        }
    }, [])
    return (
        <ReactQueryProvider>
            <Provider store={store}>{children}</Provider>
        </ReactQueryProvider>
    );
}

export default ClientProvider;