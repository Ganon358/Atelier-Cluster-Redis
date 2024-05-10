const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('redis').createClient();

const app = express();

const redis = require('redis');
const client = redis.createClient();

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.get('/data', (req, res) => {
    
    client.get('cachedData', (err, data) => {
        if (data) {
           
            res.send(JSON.parse(data));
        } else {
           
            const newData = fetchDataFromDatabase();
            client.set('cachedData', JSON.stringify(newData));
            res.send(newData);
        }
    });
});