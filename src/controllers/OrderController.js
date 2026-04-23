import express from "express";
import validate from "../middlewares/validate";
import orderSchema from "../validators/orderValidator";

export default (orderService) => {
    const router = express.Router();

    router.post("/order", validate(orderSchema), async (req, res, next) => {
        try {
            const order = await orderService.createOrder(req.body);
            res.json(order);
        } catch (err) {
            next(err);
        }
    });

    return router;
};