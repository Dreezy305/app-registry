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

  console.log("Data: ", req.body);
  res.join({ message: "message received" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(PORT, () => console.log("listening on port, ", PORT));
