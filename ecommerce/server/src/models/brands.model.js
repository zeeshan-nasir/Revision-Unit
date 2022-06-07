const mongoose = require("mongoose");

const brandsModel = new mongoose.Schema(
    {
        name: { type: String, required: true },
        product_id: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true,
            },
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("brand", brandsModel);
