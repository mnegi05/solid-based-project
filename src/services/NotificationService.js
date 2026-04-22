class NotificationService {
    constructor(notificationMethod) {
        this.notificationMethod = notificationMethod;
    }

    send(message) {
        this.notificationMethod.send(message);
    }
}

export default NotificationService;