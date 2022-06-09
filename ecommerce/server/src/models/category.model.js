const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("category", categorySchema);
