import express from "express";
const app = express();

const connectDB = require("./config/db");
const limiter = require("./middlewares/rateLimiter");
const errorHandler = require("./middlewares/errorHandler");

const container = require("./container/container");
const TYPES = require("./container/types");

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