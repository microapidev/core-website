const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@trade.levitfx.com',
    pass: '9331f0ea0be45818f3bb62efaf878215-8b34de1b-16fce93a',
  },
});

exports.sendMail = (to, subject, html) => {
  const mailOptions = {
    from: 'auth@microapi.dev',
    to,
    subject,
    html,
  };

  try {
    transport.sendMail(mailOptions);
    return `${subject} mail sent successfully`;
  } catch (error) {
    return 'An error occured, mail not deliverd.';
  }
};
