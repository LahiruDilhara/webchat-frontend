import { MessageResponseDTO } from "@/dto/message/MessageResponseDTO";
import API from "./BaseAPI";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class MessageService {
    static async getRoomLast10Messages(roomId:string): Promise<MessageResponseDTO[]>{
        const response = await API.get<MessageResponseDTO[]>(`/rooms/${roomId}/messages/last`);
        return response.data;
    }

    static async getPrevious15Messages(roomId:string, beforeMessageId:string): Promise<MessageResponseDTO[]>{
        const response = await API.get<MessageResponseDTO[]>(`/rooms/${roomId}/messages/before/${beforeMessageId}`);
        return response.data;
    }

    static async getMessagesAfterMessageID(roomId:string, messageId:string): Promise<MessageResponseDTO[]>{
        const response = await API.get<MessageResponseDTO[]>(`/rooms/${roomId}/messages/after/${messageId}`);
        return response.data;
    }

    static async getMessageSeenUsers(roomId:string,messageId:string): Promise<UserResponseDto[]>{
        const response = await API.get<UserResponseDto[]>(`/rooms/${roomId}/messages/${messageId}/seen`);
        return response.data;
    }
        
}