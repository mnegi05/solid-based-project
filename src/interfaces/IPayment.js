class IPayment {
    pay(amount) {
        throw new Error("Method 'pay' must be implemented.");
    }
}

export default IPayment;