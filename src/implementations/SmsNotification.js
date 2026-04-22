import INotification from "../interfaces/INotification";

class SmsNotification extends INotification {
    send(message) {
        console.log(`SMS sent: ${message}`);
    }
}

export default SmsNotification;