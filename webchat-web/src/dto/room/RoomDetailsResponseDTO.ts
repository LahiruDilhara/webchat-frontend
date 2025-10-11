import UserResponseDto from "../user/UserResponseDto";

export default interface RoomDetailsResponseDTO {
    id: string;
    name: string;
    createdAt: string;
    createdBy: string;
    unreadMessagesCount: string;
    type: string;
    roomMembers: UserResponseDto[];
}