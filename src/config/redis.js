import { createClient } from "redis";

const client = createClient({
    url: process.env.REDIS_URL,
});
// url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,

client.on("error", (err) => console.error("Redis Error", err));

const connectRedis = async () => {
    await client.connect();
    console.log("Redis connected");
};

export { client, connectRedis };