import express from "express";
import { pool } from "../config/postgresdb.js";

const router = express.Router();

router.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1"); // DB check

        res.status(200).json({
            status: "UP",
            database: "UP",
            timestamp: new Date(),
        });
    } catch (err) {
        res.status(500).json({
            status: "DOWN",
            database: "DOWN",
            error: err.message,
        });
    }
});

export default router;