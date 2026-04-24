import INotification from "../interfaces/INotification.js";

class EmailNotification extends INotification {
    send(message) {
        console.log(`Email sent: ${message}`);
    }
}

export default EmailNotification;