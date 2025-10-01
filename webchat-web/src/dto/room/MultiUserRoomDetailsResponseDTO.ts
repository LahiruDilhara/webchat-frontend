import RoomDetailsResponseDTO from "./RoomDetailsResponseDTO";

export default interface MultiUserRoomDetailsResponseDTO extends RoomDetailsResponseDTO {
    closed: boolean;
    isPrivate: boolean;
}