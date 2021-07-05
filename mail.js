// mail configuration goes here

const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "key-8f841f1090c759f815a8f65807badd88-1f1bd6a9-e48e58ce",
    domain: "sandbox81ca0f9721d440868794e313bb009dbd.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text) => {
  const mailOptions = {
    from: email,
    to: "bankoleidris@gmail.com",
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("message sent");
    }
  });
};
