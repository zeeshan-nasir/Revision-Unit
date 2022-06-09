const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userController = require("./controllers/user.controller");
const brandsController = require("./controllers/brand.controller");
const productsController = require("./controllers/product.controller");
const categoryController = require("./controllers/category.controller");

app.use("/user", userController);
app.use("/brand", brandsController);
app.use("/product", productsController);
app.use("/category", categoryController);

module.exports = app;
