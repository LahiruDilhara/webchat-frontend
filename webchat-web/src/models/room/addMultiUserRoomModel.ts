import { AddMultiUserRoomDTO } from "@/dto/room/AddMultiUserRoomDTO";
import BaseModel from "../baseModel";
import Joi, { ObjectSchema } from "joi";

export default class AddMultiuserRoomModel extends BaseModel implements AddMultiUserRoomDTO {
    isPrivate: boolean;
    closed: boolean;
    name: string;

    constructor(name: string, isPrivate: boolean, closed: boolean) {
        super();
        this.name = name;
        this.isPrivate = isPrivate;
        this.closed = closed;
    }

    schema(): ObjectSchema {
        return Joi.object({
            name: Joi.string().min(3).max(30).required(),
            isPrivate: Joi.boolean().required(),
            closed: Joi.boolean().required()
        })
    }

}