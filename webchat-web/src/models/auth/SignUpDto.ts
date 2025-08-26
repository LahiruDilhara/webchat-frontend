import { errorToString } from "@/utils/JoiUtil";
import Joi from "joi";

export default class SignUpDto {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    validate(): string | null {
        const schema = Joi.object({
            username: Joi.string().min(3).max(30).required(),
            password: Joi.string().min(6).max(100).required()
        })
        const validationResult = schema.validate(this);
        if (validationResult.error) {
            return errorToString(validationResult.error);
        }
        return null;
    }
}