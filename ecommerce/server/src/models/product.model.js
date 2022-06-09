const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        brand: [{ type: mongoose.Schema.Types.ObjectId, ref: "brand" }],
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
        categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productsSchema);
