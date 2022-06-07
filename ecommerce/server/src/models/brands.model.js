const mongoose = require("mongoose");

const brandsModel = new mongoose.Schema(
    {
        brands: [{ type: String, required: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("brand", brandsModel);
