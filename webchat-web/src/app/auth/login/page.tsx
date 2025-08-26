"use client";

import { useLoginViewModel } from "@/viewmodels/auth/useLoginViewModel";
import { useEffect } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
    const { username, updateUsername, password, updatePassword, error, isLoading, submit } = useLoginViewModel();

    useEffect(() => {
        toast.error(error);
    }, [error])

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="bg-surface p-8 rounded-lg shadow-md text-on-surface flex flex-col gap-8 items-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <form className="flex flex-col gap-7" onSubmit={e => { e.preventDefault(); submit() }}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-input-label">Username</label>
                        <input className="bg-input px-4 py-1 rounded-md text-on-input placeholder:text-xs" value={username} type="text" id="username" name="username" placeholder="username" required onChange={e => updateUsername(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-input-label" htmlFor="password">Password</label>
                        <input className="bg-input px-4 py-1 rounded-md text-on-input placeholder:text-xs" value={password} type="password" id="password" name="password" placeholder="password" required onChange={e => updatePassword(e.target.value)} />
                    </div>
                    <button className="bg-primary rounded-md px-8 py-1 hover:bg-primary-hover shadow-2xl shadow-shadow-primary cursor-grab" type="submit">{isLoading ? "Loading..." : "Login"}</button>
                    {error && <div className="text-red-500">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;