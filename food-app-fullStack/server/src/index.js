const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const eatController = require("./controllers/eat.controller");

app.use("/eat", eatController);

module.exports = app;
