const express = require("express");
const app = express();

app.use(express.json());

const eatController = require("./controllers/eat.controller");

app.use("/eat", eatController);

module.exports = app;
