/* eslint-disable no-extra-boolean-cast */
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const appRoute = require('./routes/newroutes');


const app = express();
// const cors = require('cors');
const mainRoute = require('./routes/route');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use(cors());

app.use(cookieParser());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// Registering and setting  the view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use((req, res, next) => {
  if (!!req.cookies.auth) {
    res.locals.isAuthenticated = true;
  } else {
    res.locals.isAuthenticated = false;
  }
  next();
});


app.use('/api/v1', mainRoute);
app.use(appRoute);

module.exports = app;
