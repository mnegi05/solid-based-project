import { Pool } from "pg";

const MAX_RETRIES = 5;
const RETRY_DELAY = 3000;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const connectWithRetry = async (retries = MAX_RETRIES) => {
    try {
        const client = await pool.connect();
        console.log("PostgreSQL connected");
        client.release();
    } catch (err) {
        if (retries === 0) {
            console.error("DB connection failed after retries");
            process.exit(1);
        }
        console.log(`Retrying DB connection... (${retries})`);
        setTimeout(() => connectWithRetry(retries - 1), RETRY_DELAY);
    }
};

pool.on("connect", () => {
    console.log("PostgreSQL connected");
});

export { pool, connectWithRetry };