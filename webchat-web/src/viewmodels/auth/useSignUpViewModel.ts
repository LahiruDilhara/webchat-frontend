import AuthMapper from "@/mapper/AuthMapper";
import SignUpModel from "@/models/auth/SignUpModel";
import AuthService from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useSignUpViewModel() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const updateUsername = (value: string) => setUsername(value);
    const updatePassword = (value: string) => setPassword(value);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error])

    const mutation = useMutation({
        mutationFn: AuthService.signUp,
        onSuccess: (data) => {
            setError(null);
            setUsername("");
            setPassword("");
            router.replace("/auth/signin");
        },
        onError: (error) => {
            setError(error.message);
        }
    })

    const submit = () => {
        setError(null);
        const signUpModel = new SignUpModel(username, password);
        const error = signUpModel.validate();
        if (error) {
            setError(error);
            return;
        }
        mutation.mutate(AuthMapper.signUpModelToSignUpDto(signUpModel));
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