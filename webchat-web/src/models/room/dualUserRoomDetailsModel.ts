import DualUserRoomDetailsResponseDTO from "@/dto/room/DualUserRoomDetailsResponseDTO";
import BaseModel from "../baseModel";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class DualUserRoomDetailsModel implements DualUserRoomDetailsResponseDTO {
    id: number;
    name: string;
    createdAt: Date;
    createdBy: string;
    unreadMessageCount: number;
    type: string;
    roomMembers: UserResponseDto[];

    constructor(data: DualUserRoomDetailsResponseDTO) {
        this.id = data.id;
        this.name = data.name;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.unreadMessageCount = data.unreadMessageCount;
        this.type = data.type;
        this.roomMembers = data.roomMembers;
    }

}