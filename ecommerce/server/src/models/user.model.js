const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: { type: String, required: true },
        addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "address" }],
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
        orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
