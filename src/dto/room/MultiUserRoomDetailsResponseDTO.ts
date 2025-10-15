import RoomDetailsResponseDTO from "./RoomDetailsResponseDTO";

export default interface MultiUserRoomDetailsResponseDTO extends RoomDetailsResponseDTO {
    closed: string;
    isPrivate: string;
}