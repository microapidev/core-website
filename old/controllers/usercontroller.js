/* eslint-disable no-extra-boolean-cast */
const axios = require('axios');
const mailer = require('./utility/mail/mail');
const fPassTemplate = require('./utility/mail/forgot-password');


const apiUrl = 'https://auth.microapi.dev/v1';

// This is an external dashboard url to task 9
const dashboardUrl = 'https://dashboard.microapi.dev/';

// Our url
const baseUrl = 'http://localhost:3000';

//  Middleware
exports.isAuthenticated = (req, res, next) => {
  if (req.cookies.auth) {
    res.redirect('/dashboard');
  }
  next();
};

exports.isLoggedIn = (req, res, next) => {
  if (!!req.cookies.auth) {
    res.redirect(dashboardUrl);
  }
  return next();
};

exports.signup = (req, res) => {
  const data = req.body;
  axios.post(
    `${apiUrl}/register`,
    data,
  ).then(() => {
    const string = encodeURIComponent('You have successfully signup, please login');
    res.redirect(`/login?successMsg=${string}`);
  }).then(() => {
    res.render('Pages/Register', {
      error: err.response ? err.response.data : '',
      msg: !err.response || typeof err.response.data === 'string' ? 'An error has occurred, please try again later' : '',
    });
  });
};

exports.forget = (req, res) => {
  const data = req.body;
  axios.post(
    `${apiUrl}/forgot-password`,
    data,
  ).then((response) => {
    const token = response.data.url.split('change-password/')[1];
    const url = `${baseUrl}/changepassword?token=${token}`;
    const userEmail = data.email;
    const subject = 'MicroApi Reset Password';
    const template = fPassTemplate(userEmail, url);
    const mailMsg = mailer.sendMail(userEmail, subject, template);
    // save token fuction here
    res.redirect(`/forgot-password?successMsg=${mailMsg}`);
  }).catch((err) => {
    res.render('Pages/Forgotpassword', {
      error: err.response ? err.response.data : '',
      msg: !err.response || typeof err.response.data === 'string' ? 'An error has occurred, please try again later' : '',
    });
  });
};


exports.changepassword = (req, res) => {
  const data = req.body;
  const { changepasstoken } = req.cookies;
  if (!changepasstoken) return res.redirect('login');
  // confirmation token fucntion here
  axios.post(
    `${apiUrl}/change-password/${changepasstoken}`,
    data,
  ).then(() => {
    const msg = encodeURIComponent('You have successfully changed your password, please login');
    return res.redirect(`/login?successMsg=${msg}`);
  }).catch((err) => {
    return res.render('Pages/Changepassword', {
      error: err.response ? err.response.data : '',
      msg: !err.response || typeof err.response.data === 'string' ? 'An error has occurred, please try again later' : '',
    });
  })
    .catch((err) => {
      console.log(err)
    });
};


exports.login = (req, res) => {
  const data = req.body;
  axios.post(
    `${apiUrl}/login`,
    data,
  ).then((response) => {
    const { token } = response.data;
    res.cookie('auth', token);
    return res.redirect('/dashboard');
  }).catch((err) => {
    res.render('Pages/Login', {
      error: err.response ? err.response.data : '',
      msg: !err.response || typeof err.response.data === 'string' ? 'An error has occurred, please try again later' : '',

    });
  }).catch((err) => {
    console.log(err)
  });
};

exports.logout = (req, res) => {
  res.clearCookie('auth');
  return res.redirect('/');
};


exports.dashboard = (req, res) => {
  const token = req.cookies.auth;
  return res.redirect(307, `${dashboardUrl}?token=${token}`);
};

exports.googleauth = (req, res) => {
  axios.get(
    `${apiUrl}/google/signin`,
  ).then((resp) => {
    const { response } = resp.data;
    res.redirect(response);
  }).catch(() => {
    res.render('Pages/Login', {
      msg: 'An error has occurred, please try again later',
    });
  });
};

exports.googlecallback = (req, res) => {
  const { code } = req.query;
  if (!code) return res.redirect('/login');
  res.cookie('auth', code);
  return res.redirect('/dashboard');
};
