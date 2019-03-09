const express = require("express");
const morgan = require("morgan");
const app = express();
const job = require("./routes/job.js");
const bodyParser = require("body-parser");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use("/api/job", job);

module.exports = app;
