const express = require("express");
const { prototype } = require("nodemailer/lib/xoauth2");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));

app.listen(port, () => console.log("listening on port, ", port));
