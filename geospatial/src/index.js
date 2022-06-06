const express = require("express");
const app = express();

app.use(express.json());

const restuarantController = require("./controllers/restaurant.controller");

app.use("/", restuarantController);

module.exports = app;
