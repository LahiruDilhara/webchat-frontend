"use client";
import getColorForString from "@/utils/ColorUtil";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./profileDropdown";

const NavUser = () => {
    const username = useSelector((state: RootState) => state.auth.username);
    const [profile, setProfile] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setProfile(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    return (
        <div className="flex flex-row items-center gap-sm cursor-pointer relative" onClick={() => setProfile(!profile)} ref={menuRef}>
            <h1 className="text-caption">{username}</h1>
            <h1 className={`${getColorForString(username)} rounded-full size-lg text-caption text-center flex items-center justify-center`}>{username.charAt(0)}</h1>
            {profile && <ProfileDropdown />}
        </div>
    );
}

export default NavUser;