import prisma from "../config/prisma.js";

class OrderRepository {
    async save(order) {
        return prisma.order.create({ data: order });
    }

    async findAll() {
        return prisma.order.findMany();
    }
}

export default OrderRepository;