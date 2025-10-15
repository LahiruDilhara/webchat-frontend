import MultiUserRoomDetailsResponseDTO from "@/dto/room/MultiUserRoomDetailsResponseDTO";
import UserResponseDto from "@/dto/user/UserResponseDto";

export default class MultiUserRoomDetailsModel implements MultiUserRoomDetailsResponseDTO {
    closed: string;
    isPrivate: string;
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    unreadMessagesCount: string;
    type: string;
    roomMembers: UserResponseDto[];

    constructor(data: MultiUserRoomDetailsResponseDTO) {
        this.closed = data.closed;
        this.isPrivate = data.isPrivate;
        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.createdBy = data.createdBy;
        this.unreadMessagesCount = data.unreadMessagesCount;
        this.type = data.type;
        this.roomMembers = data.roomMembers;
    }

}