import { AddDualUserRoomDTO } from "@/dto/room/AddDualUserRoomDTO";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import API from "./BaseAPI";
import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import { AddMultiUserRoomDTO } from '../dto/room/AddMultiUserRoomDTO';
import MultiUserRoomDetailsResponseDTO from '../dto/room/MultiUserRoomDetailsResponseDTO';
import UpdateMultiUserRoomDTO from "@/dto/room/UpdateMultiUserRoomDTO";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class RoomService {
    static async createDualUserRoom(addDualUserRoomDTO: AddDualUserRoomDTO): Promise<DualUserRoomDetailsResponseDTO> {
        const response = await API.post<DualUserRoomDetailsResponseDTO>("/rooms/dualUser", addDualUserRoomDTO);
        return response.data;
    }

    static async createMultiUserRoom(addMultiUserRoomDTO: AddMultiUserRoomDTO): Promise<MultiUserRoomDetailsResponseDTO> {
        const response = await API.post<MultiUserRoomDetailsResponseDTO>("/rooms/multiUser", addMultiUserRoomDTO);
        return response.data;
    }

    static async getUserJoinedRooms(): Promise<RoomDetailsResponseDTO[]> {
        const response = await API.get<RoomDetailsResponseDTO[]>("/rooms/");
        return response.data;
    }

    static async deleteUserRoom(roomId: number): Promise<void> {
        await API.delete(`/rooms/${roomId}`);
    }

    static async updateMultiUserRoom(updateMultiUserRoomDTO: UpdateMultiUserRoomDTO, roomId: number): Promise<MultiUserRoomDetailsResponseDTO> {
        const response = await API.patch<MultiUserRoomDetailsResponseDTO>(`/rooms/multiUser/${roomId}`, updateMultiUserRoomDTO);
        return response.data;
    }

    static async getRoomUsers(roomId: number): Promise<UserResponseDto[]> {
        const response = await API.get<UserResponseDto[]>(`/rooms/${roomId}/users`);
        return response.data;
    }
}