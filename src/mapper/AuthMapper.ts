import LoginDto from "@/dto/auth/LoginDto";
import SignUpDto from "@/dto/auth/SignUpDto";
import LoginModel from "@/models/auth/LoginModel";
import SignUpModel from "@/models/auth/SignUpModel";

export default class AuthMapper {
    static loginModelToLoginDto(loginModel: LoginModel): LoginDto {
        return {
            password: loginModel.password,
            username: loginModel.username
        };
    }

    static signUpModelToSignUpDto(signUpModel: SignUpModel): SignUpDto {
        return {
            username: signUpModel.username,
            password: signUpModel.password
        }
    }
}