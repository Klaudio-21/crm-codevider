const redisClient = require('../config/redisClient');

async function checkCache(req, res, next) {
    let cacheKey;
    
    if (req.params.clientId) {
        cacheKey = `client_${req.params.clientId}`;
    } else if (req.params.userId) {
        cacheKey = `user_${req.params.userId}`;
    } else if (req.params.projectId) {
        cacheKey = `project_${req.params.projectId}`;
    } else {
        
        return next();
    }

    try {
        const cachedData = await redisClient.get(cacheKey);
        if (cachedData) {
            const data = JSON.parse(cachedData);
            return res.status(200).json({ status: 'success', data });
        }
    
        next();
    } catch (error) {
        console.error('Redis Error:', error);
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
}

module.exports = { checkCache };
