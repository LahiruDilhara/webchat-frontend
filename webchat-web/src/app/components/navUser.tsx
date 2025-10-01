"use client";
import getColorForString from "@/utils/ColorUtil";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./profileDropdown";
import { ArrowDown, ChevronDown } from "lucide-react";

const NavUser = () => {
    const username = useSelector((state: RootState) => state.auth.username);
    const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
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
        <div className="flex flex-row items-center gap-sm cursor-pointer relative h-full brightness-75 bg-primary px-md" onClick={() => setProfile(!profile)} ref={menuRef}>
            <h1 className={`${getColorForString(username)} rounded-full size-lg text-caption text-center flex items-center justify-center`}>{username.charAt(0)}</h1>
            <div className="flex flex-row items-center gap-xs">
                <h1 className="text-caption">Welcome {username}</h1>
                <ChevronDown size={16} />
            </div>
            {profile && <ProfileDropdown />}
        </div>
    );
}

export default NavUser;