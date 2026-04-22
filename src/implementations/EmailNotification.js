import INotification from "../interfaces/INotification";

class EmailNotification extends INotification {
    send(message) {
        console.log(`Email sent: ${message}`);
    }
}

export default EmailNotification;