import IPayment from "../interfaces/IPayment";

class CardPayment extends IPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Card`);
    }
}

export default CardPayment;