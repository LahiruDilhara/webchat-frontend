import { useProfileDropdownViewModel } from "@/viewmodels/home/useprofileDropdownViewModel";
import { Home, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import PageRoutes from "../pageRoutes";

const ProfileDropdown = () => {

    const { logOut } = useProfileDropdownViewModel();
    const router = useRouter();

    return (
        <div className="bg-card-bg absolute top-full right-0 p-md flex flex-col gap-sm">
            <div className="flex flex-row items-center gap-sm w-4xl hover:brightness-75 bg-card-item cursor-pointer px-lg py-sm" onClick={() => router.push(PageRoutes.HOME)}>
                <Home size={16} />
                <h1 className="text-caption" >Home</h1>
            </div>
            <div className="flex flex-row items-center gap-sm w-4xl hover:brightness-75 bg-card-item cursor-pointer px-lg py-sm" onClick={logOut}>
                <LogOut size={16} />
                <h1 className="text-caption" >Logout</h1>
            </div>
        </div>
    );
}

export default ProfileDropdown;