import "reflect-metadata";
import { Container } from "inversify";

import TYPES from "./types.js";

import OrderService from "../services/OrderService.js";
import PaymentService from "../services/PaymentService.js";
import CryptoPayment from "../implementations/CryptoPayment.js";
import AuthService from "../services/AuthService.js";
import UserRepository from "../repositories/UserRepository.js";
import OrderRepository from "../repositories/OrderRepository.js";
import NotificationService from "../services/NotificationService.js";
import EmailNotification from "../implementations/EmailNotification.js";
const container = new Container();

container.bind(TYPES.PaymentService).toDynamicValue(() => {
    return new PaymentService(new CryptoPayment());
});

container.bind(TYPES.OrderService).toDynamicValue((context) => {
    return new OrderService(
        new (OrderRepository)(),
        context.get(TYPES.PaymentService),
        new NotificationService(
            new EmailNotification()
        )
    );
});

container.bind(TYPES.UserRepository).toDynamicValue(() => {
    return new UserRepository();
});

container.bind(TYPES.AuthService).toDynamicValue((context) => {
    return new AuthService(
        context.get(TYPES.UserRepository)
    );
});

export default container;