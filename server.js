const express = require("express");
const path = require("path");
const sendMail = require("./mail");
const app = express();

const PORT = 8080;

// data parsing
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post("/email", (req, res) => {
  // send email here
  const { subject, email, text } = req.body;
  console.log("Data: ", req.body);
  sendMail(subject, email, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "internal error" });
    } else {
      res.json({ message: "email sent" });
    }
  });
  res.join({ message: "message received" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(PORT, () => console.log("listening on port, ", PORT));
