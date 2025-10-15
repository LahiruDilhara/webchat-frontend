export default class QueryKeys {
    static USER_ROOMS = 'userRooms';
    static PUBLIC_ROOMS = 'publicRooms';
    static ROOM_MESSAGES = 'roomMessages';

    static getKeys() {
        return [QueryKeys.USER_ROOMS, QueryKeys.PUBLIC_ROOMS,QueryKeys.ROOM_MESSAGES];
    }
}