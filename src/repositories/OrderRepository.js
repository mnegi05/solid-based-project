import { pool } from "../config/postgresdb.js";
import { client } from "../config/redis.js";

class OrderRepository {
    async findAll() {
        const cacheKey = "orders:all";

        const cached = await client.get(cacheKey);
        if (cached) {
            console.log("Cache HIT");
            return JSON.parse(cached);
        }

        console.log("Cache MISS");

        // 2. Fetch from DB
        const result = await pool.query("SELECT * FROM orders");

        // 3. Store in cache (TTL: 60s)
        await client.setEx(cacheKey, 60, JSON.stringify(result.rows));

        return result.rows;
    }

    async save({ amount, status }) {
        const result = await pool.query(
            "INSERT INTO orders(amount, status) VALUES($1,$2) RETURNING *",
            [amount, status]
        );

        // ❗ Invalidate cache
        await client.del("orders:all");

        return result.rows[0];
    }
}

export default OrderRepository;