class OrderService {
    constructor(orderRepo, paymentService, notificationService) {
        this.orderRepo = orderRepo;
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    createOrder(order) {
        this.orderRepo.save(order);

        this.paymentService.pay(order.amount);
        this.notificationService.send("Order placed successfully");

        order.status = "COMPLETED";
        return order;
    }
}

export default OrderService;