import { AddDualUserRoomDTO } from "@/dto/room/AddDualUserRoomDTO";
import Joi from "joi";
import BaseModel from "../baseModel";

export default class AddDualUserRoomModel extends BaseModel implements AddDualUserRoomDTO {
    name: string;
    addingUsername: string;

    constructor(name: string, addingUsername: string) {
        super();
        this.name = name;
        this.addingUsername = addingUsername;
    }

    schema(): Joi.ObjectSchema {
        return Joi.object({
            name: Joi.string().min(3).max(30).required(),
            addingUsername: Joi.string().min(1).max(30).required()
        });
    }


}