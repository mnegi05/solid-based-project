import express from "express";
import validate from "../middlewares/validate";
import {
    registerSchema,
    loginSchema,
} from "../validators/authValidator";

export default (authService) => {
    const router = express.Router();

    // POST /register
    router.post("/register", validate(registerSchema), async (req, res, next) => {
        try {
            const result = await authService.register(req.body);
            res.json(result);
        } catch (err) {
            next(err);
        }
    });

    // POST /login
    router.post("/login", validate(loginSchema), async (req, res, next) => {
        try {
            const result = await authService.login(req.body);
            res.json(result);
        } catch (err) {
            next(err);
        }
    });

    return router;
};