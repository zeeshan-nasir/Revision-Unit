const mongoose = require("mongoose");

const categoriesModel = new mongoose.Schema(
    {
        ancestors: [{ type: String, required: true }],
        parent_id: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("category", categoriesModel);
