import BaseMessageDTO from "./BaseMessageDTO";

export default class TextMessageDTO implements BaseMessageDTO {
    message: string;
    roomId: number;
    uuid: string;
    type: string = "Text";

    constructor(roomId: number, uuid: string, message: string) {
        this.roomId = roomId;
        this.uuid = uuid;
        this.message = message;
    }

}