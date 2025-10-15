import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import BaseModel from "../baseModel";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class DualUserRoomDetailsModel implements DualUserRoomDetailsResponseDTO {
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    unreadMessagesCount: string;
    type: string;
    roomMembers: UserResponseDto[];

    constructor(data: DualUserRoomDetailsResponseDTO) {
        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.createdBy = data.createdBy;
        this.unreadMessagesCount = data.unreadMessagesCount;
        this.type = data.type;
        this.roomMembers = data.roomMembers;
    }

}