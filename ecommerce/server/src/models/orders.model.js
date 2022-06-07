const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
    {
        user_id: { type: Number, required: true },
        product_id: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("order", ordersSchema);
