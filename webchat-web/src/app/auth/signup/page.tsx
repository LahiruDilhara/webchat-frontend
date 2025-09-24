"use client";
import IconButton from "@/components/primitive/IconButtonButton";
import IconOutlinedButton from "@/components/primitive/IconOutlinedButton";
import LabelInput from "@/components/primitive/LabelInput";
import { useSignUpViewModel } from "@/viewmodels/auth/useSignUpViewModel";
import { LogIn, UserRoundPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function SignUpPage() {
    const { username, updateUsername, password, updatePassword, isLoading, submit } = useSignUpViewModel();
    const router = useRouter();

    return (
        <div className="flex flex-col px-md gap-md h-full min-h-0 items-center justify-center md:max-w-4/6">
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-sm">
                <div className="text-h1">Let's Get Started</div>
                <div className="text-caption">Please sign up for a new account.</div>
            </div>
            <form className="flex-2 w-full flex flex-col gap-4xl" onSubmit={e => { e.preventDefault(); }}>
                <div className="flex flex-col gap-xl">
                    <LabelInput label="Username" placeholder="username" value={username} onChange={(e) => { updateUsername(e.target.value) }} inputType="text"></LabelInput>
                    <LabelInput label="Password" placeholder="password" value={password} onChange={(e) => { updatePassword(e.target.value) }} inputType="password"></LabelInput>
                </div>
                <div className="flex flex-row w-full justify-between gap-xl">
                    <IconOutlinedButton icon={<LogIn />} label="Sign In" onClick={() => { router.replace("/auth/signin") }} className="flex-1 text-nowrap"></IconOutlinedButton>
                    <IconButton icon={isLoading ? <ClipLoader size={24} /> : <UserRoundPlus />} label="Sign Up" onClick={submit} className="flex-1 text-nowrap"></IconButton>
                </div>
            </form>
        </div>
    );
}