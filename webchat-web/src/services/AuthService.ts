import LoginDto from "@/dto/auth/LoginDto";
import API from "./BaseAPI";
import TokenDto from "@/dto/auth/TokenDto";
import SignUpDto from "@/dto/auth/SignUpDto";

export default class AuthService {

    static async login(loginDto: LoginDto): Promise<TokenDto> {
        const response = await API.post<{ token: string }>("/auth/login", loginDto);
        return {
            token: response.data.token
        }
    }

    static async signUp(signUpDto: SignUpDto): Promise<void> {
        await API.post("/auth/signup", signUpDto)
    }
}