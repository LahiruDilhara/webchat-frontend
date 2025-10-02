"use client";

import SearchInput from "@/components/primitive/SearchInput";
import useBreakpoint, { Breakpoint } from "@/hooks/useBreakpoint";
import { EllipsisVertical, Hamburger, Menu, Plus } from "lucide-react";
import SmHomePage from "./components/smHomePage";
import MdHomePage from "./components/mdHomePage";
import useHomePageViewModel from "@/viewmodels/home/useHomePageViewModel";
import TitleLoadingPage from "@/components/loadingPages/TitleLoadingPage";

const HomePage = () => {
    const { loading } = useHomePageViewModel();

    const { breakpoint } = useBreakpoint();
    if (loading) return <TitleLoadingPage title="Home Page is loading...."/>
    return breakpoint === "xs" ? <SmHomePage /> : <MdHomePage />;
}

export default HomePage;