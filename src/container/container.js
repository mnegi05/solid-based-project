import "reflect-metadata";
import { Container } from "inversify";

import TYPES from "./types.js";

import OrderService from "../services/OrderService.js";
import PaymentService from "../services/PaymentService.js";
import CryptoPayment from "../implementations/CryptoPayment.js";
import AuthService from "../services/AuthService.js";
import UserRepository from "../repositories/UserRepository.js";

const container = new Container();

container.bind(TYPES.PaymentService).toDynamicValue(() => {
    return new PaymentService(new CryptoPayment());
});

container.bind(TYPES.OrderService).toDynamicValue((context) => {
    return new OrderService(
        new (require("../repositories/OrderRepository.js"))(),
        context.container.get(TYPES.PaymentService),
        new (require("../services/NotificationService.js"))(
            new (require("../implementations/EmailNotification.js"))()
        )
    );
});

container.bind(TYPES.UserRepository).toDynamicValue(() => {
    return new UserRepository();
});

container.bind(TYPES.AuthService).toDynamicValue((context) => {
    return new AuthService(
        context.container.get(TYPES.UserRepository)
    );
});

export default container;