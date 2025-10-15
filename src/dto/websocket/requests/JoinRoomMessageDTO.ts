import BaseMessageDTO from "./BaseMessageDTO";

export default class JoinRoomMessageDTO implements BaseMessageDTO {
    roomId: number;
    uuid: string;
    type: string = "Join";

    constructor(roomId: number, uuid: string) {
        this.roomId = roomId;
        this.uuid = uuid;
    }
}
