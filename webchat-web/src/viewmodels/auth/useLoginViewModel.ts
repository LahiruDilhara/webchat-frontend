import TokenDto from "@/dto/auth/TokenDto";
import { setLoggedIn } from "@/slices/auth/AuthSlice";
import AuthMapper from "@/mapper/AuthMapper";
import LoginModel from "@/models/auth/LoginModel";
import AuthService from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export function useLoginViewModel() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const reduxDispatcher = useDispatch();

    const updateUsername = (value: string) => setUsername(value);
    const updatePassword = (value: string) => setPassword(value);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error])

    const mutation = useMutation({
        mutationFn: AuthService.login,
        onSuccess: (data: TokenDto) => {
            setError(null);
            localStorage.setItem("token", data.token);
            reduxDispatcher(setLoggedIn({ username: username }));
            setUsername("");
            setPassword("");
            router.replace("/home");
        },
        onError: (error) => {
            setError(error.message);
        }
    })

    const submit = () => {
        setError(null);
        const loginModel = new LoginModel(username, password);
        const error = loginModel.validate();
        if (error) {
            setError(error);
            return;
        }
        mutation.mutate(AuthMapper.loginModelToLoginDto(loginModel));
    }

    return {
        username,
        updateUsername,
        password,
        updatePassword,
        error,
        isLoading: mutation.isPending,
        submit
    }
}