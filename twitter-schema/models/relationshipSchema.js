const mongoose = require("mongoose");

const relationshipSchema = new mongoose.Schema({
    follower_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    followed_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, default: Date.now },
});

const RelationshipSchema = mongoose.model("follower", relationshipSchema);

module.exports = RelationshipSchema;
