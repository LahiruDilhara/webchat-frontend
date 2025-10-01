"use client";

import SearchInput from "@/components/primitive/SearchInput";
import useBreakpoint, {Breakpoint} from "@/hooks/useBreakpoint";
import { EllipsisVertical, Hamburger, Menu, Plus } from "lucide-react";
import SmHomePage from "./components/smHomePage";
import MdHomePage from "./components/mdHomePage";

const HomePage = () => {
    const { breakpoint } = useBreakpoint();
    return breakpoint === "xs" ? <SmHomePage /> : <MdHomePage />;
}

export default HomePage;