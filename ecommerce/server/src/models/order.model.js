const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
        quantity: { type: Number },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("order", ordersSchema);
