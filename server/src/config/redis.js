const Redis = require("ioredis");

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

// Test the connection (optional)
(async () => {
  try {
    await redis.ping();
    console.log("Connected to Redis");
  } catch (error) {
    console.error("Error connecting to Redis:", error);
  } finally {
    // Don't forget to close the Redis connection when done
    redis.quit();
  }
})();
