"use client";
import TitleLoadingPage from "@/components/features/TitleLoadingPage";
import { useClientInitializerViewModel } from "@/viewmodels/root/clientInitializerViewmode";

const ClientInitializer = ({ children }: { children: React.ReactNode }) => {
    const {ready} = useClientInitializerViewModel();
    return (
        <>
            {ready ? children : <TitleLoadingPage title="Loading...."></TitleLoadingPage>}
        </>
    );
}

export default ClientInitializer;