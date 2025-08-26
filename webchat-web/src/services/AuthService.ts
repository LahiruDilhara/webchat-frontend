import LoginDto from "@/dto/auth/LoginDto";
import API from "./BaseAPI";
import TokenDto from "@/dto/auth/TokenDto";

export default class AuthService {

    static async login(loginDto: LoginDto): Promise<TokenDto> {
        const response = await API.post<{ token: string }>("/auth/login", loginDto);
        return {
            token: response.data.token
        }
    }
}