const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        addresses: [
            {
                locality: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                pincode: { type: String, required: true },
            },
        ],
        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
        orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("user", userSchema);
