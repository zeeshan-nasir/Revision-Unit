const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ["Point"],
            index: "2dsphere",
        },
        coordinates: {
            type: [Number],
            index: "2dsphere",
        },
    },
    name: { type: String },
});

module.exports = mongoose.model("restaurant", restaurantSchema);
