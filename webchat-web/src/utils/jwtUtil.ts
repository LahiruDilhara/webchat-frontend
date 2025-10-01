import { jwtDecode, JwtPayload } from "jwt-decode";

function getTokenUser(token: string): null | string {
    let jwtToken: JwtPayload | null = null;
    try {
        jwtToken = jwtDecode(token);
    }
    catch (e) {
        jwtToken = null;
    }
    if (jwtToken == null) return null;
    if(jwtToken.sub == null) return null;
    if(jwtToken.exp == null) return jwtToken.sub;
    const currentTime = Math.floor(Date.now() / 1000);
    if (jwtToken.exp < currentTime) return null;
    return jwtToken.sub;
}

export { getTokenUser };