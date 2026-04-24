import express from "express";
import auth from "../middlewares/authMiddleware";
import authorize from "../middlewares/roleMiddleware";

export default (orderService) => {
    const router = express.Router();

    router.post("/order", auth, authorize("ADMIN"), async (req, res, next) => {
        try {
            const order = await orderService.createOrder(req.body);
            res.json(order);
        } catch (err) {
            next(err);
        }
    });

    return router;
};