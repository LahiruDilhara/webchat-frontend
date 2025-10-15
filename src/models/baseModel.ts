import { errorToString } from "@/utils/JoiUtil";
import Joi from "joi";

export default class BaseModel {

    validate(): string | null {
        const schema = this.schema();
        const validationResult = schema.validate(this);
        if (validationResult.error) {
            return errorToString(validationResult.error);
        }
        return null;
    }

    schema(): Joi.ObjectSchema {
        return Joi.object({});
    }

}