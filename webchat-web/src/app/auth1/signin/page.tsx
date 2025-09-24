"use client";
import IconLabelButton from "@/components/primitive/IconLabelButton";
import LabelInput from "@/components/primitive/LabelInput";
import { LogIn } from "lucide-react";


export default function SignInPage() {
    return <>
        <div>Welcome Back!</div>
        <div>Please sign in to your account.</div>
        <form onSubmit={e => { e.preventDefault(); }}>
            <LabelInput label="Username" placeholder="username" value="" onChange={() => { }}></LabelInput>
            <LabelInput label="Username" placeholder="username" value="" onChange={() => { }}></LabelInput>
            <IconLabelButton icon={<LogIn></LogIn>} label="Sign In" onClick={() => { }}></IconLabelButton>
        </form>
    </>;
}