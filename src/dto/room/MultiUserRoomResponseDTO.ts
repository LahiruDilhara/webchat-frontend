import RoomResposneDTO from "./RoomResponseDTO";

export default interface MultiUserRoomResponseDTO extends RoomResposneDTO{
    closed: string;
    isPrivate: string;
}