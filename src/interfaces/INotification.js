class INotification {
    send(message) {
        throw new Error("Method 'send' must be implemented.");
    }
}

export default INotification;