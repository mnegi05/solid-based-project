// app.js
import express, { json } from "express";
const app = express();

app.use(json());

// Imports
import Order from "./models/Order";
import OrderRepository from "./repositories/OrderRepository";

import OrderService from "./services/OrderService";
import PaymentService from "./services/PaymentService";
import NotificationService from "./services/NotificationService";

import UpiPayment from "./implementations/UpiPayment";
import EmailNotification from "./implementations/EmailNotification";

// Dependency Injection
const orderRepo = new OrderRepository();

const paymentMethod = new UpiPayment();
const paymentService = new PaymentService(paymentMethod);

const notificationMethod = new EmailNotification();
const notificationService = new NotificationService(notificationMethod);

const orderService = new OrderService(
    orderRepo,
    paymentService,
    notificationService
);

// Controller
const orderController = require("./controllers/OrderController")(orderService);
app.use("/", orderController);

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));