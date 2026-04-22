class OrderRepository {
    constructor() {
        this.orders = [];
    }

    save(order) {
        this.orders.push(order);
    }

    findAll() {
        return this.orders;
    }
}

export default OrderRepository;