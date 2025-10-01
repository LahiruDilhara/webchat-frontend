import UserResponseDto from "../user/UserResponseDto";

export default interface RoomDetailsResponseDTO {
    id: number;
    name: string;
    createdAt: Date;
    createdBy: string;
    unreadMessageCount: number;
    type: string;
    roomMembers: UserResponseDto[];
}