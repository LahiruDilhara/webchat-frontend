import BaseResponseMessageDTO from "./BaseResponseMessageDTO";

export default interface ClientErrorMessageResponseDTO extends BaseResponseMessageDTO {
    error: string;
}