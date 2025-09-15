"use client";
import { queryClient } from "@/lib/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import { useApplicationInitializer } from "@/viewmodels/root/useAppInitializer";
import { ToastContainer } from "react-toastify";
import RootLoadingScreen from "@/components/root/RootLoadingScreen";

const ClientInitializer = ({ children }: { children: React.ReactNode }) => {
    const { isReady, progress, title } = useApplicationInitializer();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {isReady ? children : <RootLoadingScreen progress={progress} title={title} ></RootLoadingScreen>}
                </Provider>
            </QueryClientProvider>
            <ToastContainer />
        </>
    );
}

export default ClientInitializer;