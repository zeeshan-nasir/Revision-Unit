const mongoose = require("mongoose");

const productsModel = new mongoose.Schema(
    {
        category_id: [{ type: String, required: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productsModel);
