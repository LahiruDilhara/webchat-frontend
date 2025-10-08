export function buildWebSocketUrl(token: string): string {
    const url = process.env.NEXT_PUBLIC_WS_URL;
    if (!url) {
        throw new Error("WebSocket URL is not defined in environment variables");
    }
    return `${url}?Authorization=Bearer ${token}`;
}