const express = require('express');
const routes = require('express').Router();

const serverPort = 8000;

// init the express app
const app = express();

const assetsRoute = require('./assets');
const userRoute = require('./user');
const messageRoute = require('./message');

routes.use('/assets', assetsRoute);
routes.use('/user', userRoute);
routes.use('/message', messageRoute);

// define the index route
app.get('/', (req, res) => {
 console.log('A new request just hit the API !');
 res.send('Hello dear API client :)');
});

// listen to incoming requests
app.listen(serverPort, () => console.log('Express server is running'));

module.exports = routes;
