const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@trade.levitfx.com',
    pass: process.env.MAIL_PASSWORD,
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
