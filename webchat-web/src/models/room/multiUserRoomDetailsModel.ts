import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class MultiUserRoomDetailsModel implements MultiUserRoomDetailsResponseDTO {
    closed: boolean;
    isPrivate: boolean;
    id: number;
    name: string;
    createdAt: Date;
    createdBy: string;
    unreadMessageCount: number;
    type: string;
    roomMembers: UserResponseDto[];

    constructor(data: MultiUserRoomDetailsResponseDTO) {
        this.closed = data.closed;
        this.isPrivate = data.isPrivate;
        this.id = data.id;
        this.name = data.name;
        this.createdAt = new Date(data.createdAt);
        this.createdBy = data.createdBy;
        this.unreadMessageCount = data.unreadMessageCount;
        this.type = data.type;
        this.roomMembers = data.roomMembers;
    }

}