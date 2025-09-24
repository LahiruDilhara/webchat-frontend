"use client";
import IconButton from "@/components/primitive/IconButtonButton";
import IconOutlinedButton from "@/components/primitive/IconOutlinedButton";
import LabelInput from "@/components/primitive/LabelInput";
import { LogIn, UserRoundPlus } from "lucide-react";

export default function SignUpPage() {
    return (
        <div className="flex flex-col px-md gap-md h-full min-h-0 items-center justify-center">
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-sm">
                <div className="text-h1">Let's Get Started</div>
                <div className="text-caption">Please sign up for a new account.</div>
            </div>
            <form className="flex-2 w-full flex flex-col gap-4xl" onSubmit={e => { e.preventDefault(); }}>
                <div className="flex flex-col gap-xl">
                    <LabelInput label="Username" placeholder="username" value="" onChange={() => { }} inputType="text"></LabelInput>
                    <LabelInput label="Password" placeholder="password" value="" onChange={() => { }} inputType="password"></LabelInput>
                </div>
                <div className="flex flex-row w-full justify-between gap-xl">
                    <IconOutlinedButton icon={<LogIn/>} label="Sign In" onClick={() => { }} className="flex-1 text-nowrap"></IconOutlinedButton>
                    <IconButton icon={<UserRoundPlus/>} label="Sign Up" onClick={() => { }} className="flex-1 text-nowrap"></IconButton>
                </div>
            </form>
        </div>
    );
}