class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    pay(amount) {
        this.paymentMethod.pay(amount);
    }
}

export default PaymentService;