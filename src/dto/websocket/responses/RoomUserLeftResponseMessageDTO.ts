import BaseResponseMessageDTO from "./BaseResponseMessageDTO";

export default interface RoomUserLeftResponseMessageDTO extends BaseResponseMessageDTO {
    username: string;
    roomId: string;
}