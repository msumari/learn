const express = require("express");

const app = express();

const logger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

const requestTime = (req, res, next) => {
  req.reqTime = Date.now();
  next();
};

app.use(logger);
app.use(requestTime);

app.get("/time", (req, res) => {
  res.send(`Current time:${req.reqTime}`);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/ping", (req, res) => {
  res.send("Node api");
});

app.listen(5000, () => {
  console.log("Server start");
});
