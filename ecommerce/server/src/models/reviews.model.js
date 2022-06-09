const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
    {
        review_text: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("review", reviewsSchema);
