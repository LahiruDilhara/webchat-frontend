import BaseResponseMessageDTO from "./BaseResponseMessageDTO";

export default interface TypingResponseMessageDTO extends BaseResponseMessageDTO {
    username: string;
    roomId: string;
}