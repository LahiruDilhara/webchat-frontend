import LoginDto from "@/dto/auth/LoginDto";
import LoginModel from "@/models/auth/LoginModel";

export default class AuthMapper {
    static loginModelToLoginDto(loginModel: LoginModel): LoginDto {
        return {
            password: loginModel.password,
            username: loginModel.username
        };
    }
}