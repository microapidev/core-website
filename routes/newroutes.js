const express = require('express');
const user = require('../controllers/usercontroller');

const appRoute = express.Router();

appRoute.get('/', user.isAuthenticated, (req, res) => {
  res.render('index', { variable: 'Hello Guys' });
});


appRoute.get('/about', user.isAuthenticated, (req, res) => {
  res.render('Pages/About');
});


appRoute.get('/register', user.isAuthenticated, (req, res) => {
  res.render('Pages/Register');
});

appRoute.get('/login', user.isAuthenticated, (req, res) => {
  const { successMsg } = req.query;
  res.render('Pages/Login', {
    successMsg,
  });
});

appRoute.get('/forgot-password', user.isAuthenticated, (req, res) => {
  const { successMsg } = req.query;
  res.render('Pages/Forgotpassword', {
    successMsg,
  });
});

appRoute.get('/changepassword', user.isAuthenticated, (req, res) => {
  const { token } = req.query;
  if (!token) return res.redirect('/login');
  res.cookie('changepasstoken', token);
  return res.render('Pages/Changepassword');
});


appRoute.post('/login', user.isAuthenticated, user.login);
appRoute.post('/register', user.isAuthenticated, user.signup);
appRoute.post('/forgot-password', user.forget);
appRoute.get('/logout', user.logout);
appRoute.get('/dashboard', user.dashboard);
appRoute.get('/googleauth', user.isAuthenticated, user.googleauth);
appRoute.get('/google/callback', user.isAuthenticated, user.googlecallback);
appRoute.post('/changepassword', user.isAuthenticated, user.changepassword);


module.exports = appRoute;
