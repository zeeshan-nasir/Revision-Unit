const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
    {
        address: [{ type: String, required: true }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userModel);
