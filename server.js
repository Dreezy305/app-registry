const express = require("express");

const app = express();
const path = require("path");

const PORT = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.listen(PORT, () => console.log("listening on 8080)"));
