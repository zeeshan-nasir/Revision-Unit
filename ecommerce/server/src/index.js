const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userController = require("./controllers/user.controller");
const brandsController = require("./controllers/brands.controller");
const productsController = require("./controllers/products.controller");

app.use("/users", userController);
app.use("/brands", brandsController);
app.use("/products", productsController);

module.exports = app;
