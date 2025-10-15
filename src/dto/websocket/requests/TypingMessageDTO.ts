import BaseMessageDTO from "./BaseMessageDTO";
import MessageDTO from "./MessageDTO";

export default class TypingMessageDTO implements MessageDTO{
    roomId: number;
    uuid: string;
    type: string = "Typing";

    constructor(roomId: number, uuid: string) {
        this.roomId = roomId;
        this.uuid = uuid;
    }
}