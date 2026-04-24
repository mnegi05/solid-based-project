import express from "express";
const app = express();

import connectDB from "./config/db.js";
import limiter from "./middlewares/rateLimiter.js";
import errorHandler from "./middlewares/errorHandler.js";
import container from "./container/container.js";
import TYPES from "./container/types.js";
import OrderController from "./controllers/OrderController.js";
import AuthController from "./controllers/AuthController.js";


app.use(express.json());
app.use(limiter);

// DB
connectDB();

// DI
const orderService = container.get(TYPES.OrderService);
const authService = container.get(TYPES.AuthService);

// Controller
const orderController = new OrderController(orderService);
const authController = new AuthController(authService);

app.use("/", orderController.router);
app.use("/", authController.router);

// Error Handler (last)
app.use(errorHandler);

app.listen(3000, () => console.log("Server running"));