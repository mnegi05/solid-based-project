import express from "express";
import validate from "../middlewares/validate.js";
import {
    registerSchema,
    loginSchema,
} from "../validators/authValidator.js";

class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    router = express.Router();
    setupRoutes() {
        // POST /register
        this.router.post("/register", validate(registerSchema), async (req, res, next) => {
            try {
                const result = await this.authService.register(req.body);
                res.json(result);
            } catch (err) {
                next(err);
            }
        });

        // POST /login
        this.router.post("/login", validate(loginSchema), async (req, res, next) => {
            try {
                const result = await this.authService.login(req.body);
                res.json(result);
            } catch (err) {
                next(err);
            }
        });

        return this.router;
    }
}

export default AuthController;