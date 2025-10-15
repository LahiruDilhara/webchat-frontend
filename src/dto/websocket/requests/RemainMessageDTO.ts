import BaseMessageDTO from "./BaseMessageDTO";

export default class RemainMessageDTO implements BaseMessageDTO {
    messageId: number;
    roomId: number;
    uuid: string;
    type: string = "RemainMessage";

    constructor(messageId: number, roomId: number, uuid: string) {
        this.messageId = messageId;
        this.roomId = roomId;
        this.uuid = uuid;
    }
}