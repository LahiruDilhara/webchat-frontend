"use client";
import LabelInput from "@/components/primitive/LabelInput";


export default function SignInPage() {
    return <>
        <div>Welcome Back!</div>
        <div>Please sign in to your account.</div>
        <form onSubmit={e => { e.preventDefault(); }}>
            <LabelInput label="Username" placeholder="username" value="" onChange={() => { }}></LabelInput>
            <LabelInput label="Username" placeholder="username" value="" onChange={() => { }}></LabelInput>
            <h1 className="text-h1">Hello world</h1>
        </form>
    </>;
}