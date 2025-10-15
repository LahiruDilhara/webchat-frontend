import UpdateMultiUserRoomDTO from "@/dto/room/UpdateMultiUserRoomDTO";
import BaseModel from "../baseModel";
import Joi, { ObjectSchema } from "joi";

export default class UpdateMultiUserRoomModel extends BaseModel implements UpdateMultiUserRoomDTO {
    isPrivate?: boolean;
    name?: string;
    closed?: boolean;

    constructor(data: UpdateMultiUserRoomDTO) {
        super();
        this.isPrivate = data.isPrivate;
        this.name = data.name;
        this.closed = data.closed;
    }

    schema(): ObjectSchema {
        return Joi.object({
            isPrivate: Joi.boolean().optional(),
            name: Joi.string().min(3).max(30).optional(),
            closed: Joi.boolean().optional(),
        })
    }

}