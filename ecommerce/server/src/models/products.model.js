const mongoose = require("mongoose");

const productsModel = new mongoose.Schema(
    {
        category_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "category",
                required: true,
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productsModel);
