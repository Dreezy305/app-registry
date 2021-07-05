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
  from: "test@gmail.com",
  to: "test@gmail.com",
  subject: "testing",
  text: "hey there",
};

transporter.sendMail(mailOptions);
