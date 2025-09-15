"use client";
import { queryClient } from "@/lib/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from 'react-redux';
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import { useClientProviderViewModel } from "@/viewmodels/root/clientProviderViewModel";
import TitleLoadingPage from "@/components/features/TitleLoadingPage";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    const { ready } = useClientProviderViewModel();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {ready ? children : <TitleLoadingPage title="Loading...."></TitleLoadingPage>}
                </Provider>
            </QueryClientProvider>
            <ToastContainer />
        </>
    );
}

export default ClientProvider;