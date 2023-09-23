const Redis = require('ioredis');

const redis = new Redis(process.env.REDIS_URI);

console.log("Redis connected")



module.exports = redis;
