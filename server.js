const express = require("express");

const app = express();
const path = require("path");

const PORT = 8070;

// data parsing
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.post("/email", (req, res) => {
  // send email here
  res.join({ message: "message received" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(PORT, () => console.log("listening on port, ", PORT));
