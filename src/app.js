import express from "express";
const app = express();

import connectDB from "./config/db";
import limiter from "./middlewares/rateLimiter";
import errorHandler from "./middlewares/errorHandler";

import container from "./container/container";
import TYPES from "./container/types";

app.use(express.json());
app.use(limiter);

// DB
connectDB();

// DI
const orderService = container.get(TYPES.OrderService);
const authService = container.get(TYPES.AuthService);

// Controller
const orderController = require("./controllers/OrderController")(orderService);
const authController = require("./controllers/AuthController")(authService);

app.use("/", orderController);
app.use("/", authController);

// Error Handler (last)
app.use(errorHandler);

app.listen(3000, () => console.log("Server running"));