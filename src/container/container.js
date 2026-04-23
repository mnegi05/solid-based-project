import "reflect-metadata";
import { Container } from "inversify";

import TYPES from "./types";

import OrderService from "../services/OrderService";
import PaymentService from "../services/PaymentService";
import CryptoPayment from "../implementations/CryptoPayment";

const container = new Container();

container.bind(TYPES.PaymentService).toDynamicValue(() => {
    return new PaymentService(new CryptoPayment());
});

container.bind(TYPES.OrderService).toDynamicValue((context) => {
    return new OrderService(
        new (require("../repositories/OrderRepository"))(),
        context.container.get(TYPES.PaymentService),
        new (require("../services/NotificationService"))(
            new (require("../implementations/EmailNotification"))()
        )
    );
});

export default container;