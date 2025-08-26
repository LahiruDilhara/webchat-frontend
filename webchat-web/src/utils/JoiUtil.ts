import Joi from "joi";

export function errorToString(error: Joi.ValidationError): string {
    const errorMessage: string = error.details.map(detail => detail.message.replace(/"/g, "'")).join(" , ").toString();
    return errorMessage;
}