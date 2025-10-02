import UserResponseDto from "../user/UserResponseDto";

export default interface RoomDetailsResponseDTO {
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    unreadMessageCount: string;
    type: string;
    roomMembers: UserResponseDto[];
}