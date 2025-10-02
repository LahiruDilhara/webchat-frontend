import UserResponseDto from "@/dto/user/UserResponseDto";

export default class UserMapper {
    static dataToUserResponseDTO(data: any): UserResponseDto {
        return {
            id: parseInt(data.id),
            username: data.username,
            lastSeen: new Date(data.lastSeen),
        }
    }
}