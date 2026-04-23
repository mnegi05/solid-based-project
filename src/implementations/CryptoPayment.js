import IPayment from "../interfaces/IPayment.js";

class CryptoPayment extends IPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Crypto`);
    }
}

export default CryptoPayment;