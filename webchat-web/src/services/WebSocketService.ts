export default class WebSocketService {
    socket: WebSocket | null = null;
    url: string = process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8080/chat";
    onConnectListeners: (() => void)[] = [];
    onMessageListeners: ((message: MessageEvent) => void)[] = [];
    onCloseListeners: ((event: CloseEvent) => void)[] = [];
    onErrorListeners: ((event: Event) => void)[] = [];

    addOnConnectListener(listener: () => void) {
        this.onConnectListeners.push(listener);
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            listener();
        }
    }

    removeOnConnectListener(listener: () => void) {
        this.onConnectListeners = this.onConnectListeners.filter(l => l !== listener);
    }

    addOnMessageListener(listener: (message: MessageEvent) => void) {
        this.onMessageListeners.push(listener);
    }

    removeOnMessageListener(listener: (message: MessageEvent) => void) {
        this.onMessageListeners = this.onMessageListeners.filter(l => l !== listener);
    }

    addOnCloseListener(listener: (event: CloseEvent) => void) {
        this.onCloseListeners.push(listener);
    }

    removeOnCloseListener(listener: (event: CloseEvent) => void) {
        this.onCloseListeners = this.onCloseListeners.filter(l => l !== listener);
    }

    addOnErrorListener(listener: (event: Event) => void) {
        this.onErrorListeners.push(listener);
    }

    removeOnErrorListener(listener: (event: Event) => void) {
        this.onErrorListeners = this.onErrorListeners.filter(l => l !== listener);
    }

    private notifyConnect() {
        this.onConnectListeners.forEach(listener => listener());
    }

    private notifyMessage(message: MessageEvent) {
        this.onMessageListeners.forEach(listener => listener(message));
    }

    private notifyClose(event: CloseEvent) {
        this.onCloseListeners.forEach(listener => listener(event));
    }

    private notifyError(event: Event) {
        this.onErrorListeners.forEach(listener => listener(event));
    }

    connect() {
        const url = `${this.url}?Authorization=Bearer ${localStorage.getItem("token")}`;
        this.socket = new WebSocket(url);
        this.socket.onopen = () => {
            this.notifyConnect();
        };
        this.socket.onmessage = (message) => {
            this.notifyMessage(message);
        };
        this.socket.onclose = (event) => {
            this.notifyClose(event);
            // setTimeout(() => {
            //     this.connect();
            // }, 5000); // Reconnect after 5 seconds
        };
        this.socket.onerror = (event) => {
            this.notifyError(event);
        };
    }
    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}