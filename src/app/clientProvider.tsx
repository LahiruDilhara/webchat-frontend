"use client";
import { queryClient } from "@/lib/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import { ToastContainer } from "react-toastify";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {children}
                </Provider>
            </QueryClientProvider>
            <ToastContainer />
        </>
    );
}

export default ClientProvider;