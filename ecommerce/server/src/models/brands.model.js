const mongoose = require("mongoose");

const brandsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        logo: { type: String, required: true },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
            },
        ],
        catogories: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("brand", brandsSchema);
