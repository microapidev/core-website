const express = require('express');
const user = require('../controllers/user_controller');

const appRoute = express.Router();

appRoute.use('/services', require('./servicesRoute'));

appRoute.post('/login', user.login);
appRoute.post('/register', user.create);

module.exports = appRoute;
