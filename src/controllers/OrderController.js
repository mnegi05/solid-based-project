import express from "express";
import auth from "../middlewares/authMiddleware.js";
import authorize from "../middlewares/roleMiddleware.js";

class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    router = express.Router();
    setupRoutes() {
        this.router.post("/order", auth, authorize("ADMIN"), async (req, res, next) => {
            try {
                const order = await this.orderService.createOrder(req.body);
                res.json(order);
            } catch (err) {
                next(err);
            }
        });

        return this.router;
    }
}

export default OrderController;
