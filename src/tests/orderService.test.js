import OrderService from "../services/OrderService";

test("should create order", () => {
    const mockRepo = { save: jest.fn() };
    const mockPayment = { pay: jest.fn() };
    const mockNotification = { send: jest.fn() };

    const service = new OrderService(
        mockRepo,
        mockPayment,
        mockNotification
    );

    const order = { amount: 100 };

    service.createOrder(order);

    expect(mockRepo.save).toHaveBeenCalled();
    expect(mockPayment.pay).toHaveBeenCalledWith(100);
});