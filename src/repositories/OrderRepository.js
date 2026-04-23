import OrderModel from "../models/OrderModel";

class OrderRepository {
    async save(order) {
        return await OrderModel.create(order);
    }

    async findAll() {
        return await OrderModel.find();
    }
}

export default OrderRepository;