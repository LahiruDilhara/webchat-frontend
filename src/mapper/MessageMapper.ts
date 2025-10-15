import TextMessageResponseDTO from "@/dto/message/TextMessageResponseDTO";
import { Message } from "@/slices/message/MessageSlice";

export default class Messagemapper{
    static textMessageResponseDTOToMessage(textMessageResponseDTO: TextMessageResponseDTO, currentUsername: string): Message {
        return {
            content: textMessageResponseDTO.content,
            edited: textMessageResponseDTO.createdAt !== textMessageResponseDTO.editedAt,
            id: textMessageResponseDTO.id,
            owner: textMessageResponseDTO.senderUsername.toLowerCase() === currentUsername.toLowerCase(),
            roomId: textMessageResponseDTO.roomId,
            sender: textMessageResponseDTO.senderUsername,
            time: textMessageResponseDTO.createdAt,
            type: textMessageResponseDTO.type,
            uuid: textMessageResponseDTO.uuid,
        }
    }
}