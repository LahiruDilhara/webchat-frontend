import { MessageResponseDTO } from "./MessageResponseDTO";

export default interface TextMessageResponseDTO extends MessageResponseDTO {
    content: string;
    editedAt: string;
}