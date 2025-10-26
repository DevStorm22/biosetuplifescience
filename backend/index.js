const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./configs/db.js");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
