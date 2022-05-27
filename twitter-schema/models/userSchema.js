const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, default: Date.now },
});

const UserSchema = mongoose.model("user", userSchema);

module.exports = UserSchema;
