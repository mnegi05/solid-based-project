import { pool } from "../config/postgresdb.js";

class OrderRepository {
    async save({ amount, status }) {
        const result = await pool.query(
            "INSERT INTO orders(amount, status) VALUES($1, $2) RETURNING *",
            [amount, status]
        );
        return result.rows[0];
    }

    async findAll() {
        const result = await pool.query("SELECT * FROM orders");
        return result.rows;
    }
}

export default OrderRepository;