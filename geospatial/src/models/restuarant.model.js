const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    location: {
        type: {
            type: String,
            enum: ["Point"],
        },
        coordinates: {
            type: [Number],
        },
    },
    name: { type: String },
});

module.exports = mongoose.model("restaurant", restaurantSchema);
