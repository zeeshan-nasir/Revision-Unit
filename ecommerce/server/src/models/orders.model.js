const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        address: { type: mongoose.Schema.Types.ObjectId, ref: "address" },
        products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("order", ordersSchema);
