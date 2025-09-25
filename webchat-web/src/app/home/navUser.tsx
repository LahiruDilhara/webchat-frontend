"use client";
import getColorForString from "@/utils/ColorUtil";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NavUser = () => {
    const username = useSelector((state: RootState) => state.auth.username);

    return (
        <div className="flex flex-row items-center gap-xs">
            <h1 className={`${getColorForString(username)} rounded-full size-lg text-caption text-center flex items-center justify-center`}>{username.charAt(0)}</h1>
            <h1 className="text-caption">{username}</h1>
        </div>
    );
}

export default NavUser;