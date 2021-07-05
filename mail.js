const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "",
    domain: "",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: "",
  to: "",
  subject: "",
  text: "",
};
