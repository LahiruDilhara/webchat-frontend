import { useProfileDropdownViewModel } from "@/viewmodels/home/useprofileDropdownViewModel";
import { useEffect, useRef } from "react";

const ProfileDropdown = () => {

    const { logOut } = useProfileDropdownViewModel();

    return (
        <div className="bg-card-bg absolute top-full right-0 w-3xl px-sm py-sm">
            <h1 className="text-caption p-sm hover:brightness-75 bg-card-item cursor-pointer" onClick={logOut}>Logout</h1>
        </div>
    );
}

export default ProfileDropdown;