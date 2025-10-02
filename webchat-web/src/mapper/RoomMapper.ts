import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import RoomDetailsResponseDTO from "@/dto/room/RoomDetailsResponseDTO";
import UserMapper from "./UserMapper";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class RoomMapper {

    static dataToRoomDetailsResponseDTO(data: RoomDetailsResponseDTO): RoomDetailsResponseDTO {
        if (data.type === "DualUserRoom") {
            return this.dataToDualUserRoomDetailsResponseDTO(data as DualUserRoomDetailsResponseDTO);
        }
        else if (data.type === "MultiUserRoom") {
            return this.dataToMultiUserRoomDetailsResponseDTO(data as MultiUserRoomDetailsResponseDTO);
        }
        return data;
    }

    static dataToMultiUserRoomDetailsResponseDTO(data: any): MultiUserRoomDetailsResponseDTO {
        return {
            id: parseInt(data.id),
            name: data.name,
            type: data.type,
            createdAt: new Date(data.createdAt),
            createdBy: data.createdBy,
            closed: Boolean(data.closed),
            isPrivate: Boolean(data.isPrivate),
            roomMembers: data.roomMembers.map((member: UserResponseDto) => UserMapper.dataToUserResponseDTO(member)),
            unreadMessageCount: parseInt(data.unreadMessageCount)
        }
    }

    static dataToDualUserRoomDetailsResponseDTO(data: any): DualUserRoomDetailsResponseDTO {
        return {
            id: parseInt(data.id),
            name: data.name,
            type: data.type,
            createdAt: new Date(data.createdAt),
            createdBy: data.createdBy,
            roomMembers: data.roomMembers.map((member: UserResponseDto) => UserMapper.dataToUserResponseDTO(member)),
            unreadMessageCount: parseInt(data.unreadMessageCount)
        }
    }



}