"use client";
import { useRouter } from "next/navigation";
import PageRoutes from "../pageRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NavItem from "./navItem";
import NavUser from "./navUser";

const NavBar = () => {
    const router = useRouter();
    const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
    return (
        <div className="h-full w-full flex flex-row items-center justify-between shadow-nav-shadow shadow-md  bg-background z-[1000]">
            <h1 className="cursor-pointer text-xl px-sm font-extrabold" onClick={() => router.replace(PageRoutes.ROOT)}><span className="text-blue-600">W</span>eb<span className="text-purple-600">C</span>hat</h1>
            <div className="h-full flex flex-row gap-sm items-center">
                {!loggedIn && (
                    <>
                        <NavItem label={"Sign in"} onClick={() => router.push(PageRoutes.SIGN_IN)} />
                        <NavItem label={"Sign up"} onClick={() => router.push(PageRoutes.SIGN_UP)} />
                    </>
                )}
                {loggedIn && (
                    <>
                        <NavUser />
                    </>
                )}
            </div>
        </div>);
}

export default NavBar;