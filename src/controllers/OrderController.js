import { Router } from "express";
const router = Router();

export default (orderService) => {
    router.post("/order", (req, res) => {
        const { id, amount } = req.body;

        const order = orderService.createOrder({ id, amount });

        res.json(order);
    });

    return router;
};