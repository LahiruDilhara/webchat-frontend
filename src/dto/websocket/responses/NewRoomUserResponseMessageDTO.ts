import BaseResponseMessageDTO from "./BaseResponseMessageDTO";

export default interface NewRoomUserResponseMessageDTO extends BaseResponseMessageDTO {
    username: string;
    roomId: string;
}