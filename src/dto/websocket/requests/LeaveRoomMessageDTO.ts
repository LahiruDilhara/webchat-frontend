import BaseMessageDTO from "./BaseMessageDTO";

export default class LeaveRoomMessageDTO implements BaseMessageDTO {
    roomId: number;
    uuid: string;
    type: string = "Leave";

    constructor(roomId: number, uuid: string) {
        this.roomId = roomId;
        this.uuid = uuid;
    }
}