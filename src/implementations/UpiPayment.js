import IPayment from "../interfaces/IPayment";

class UpiPayment extends IPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

export default UpiPayment;