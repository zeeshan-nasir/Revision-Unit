const mongoose = require("mongoose");

const neighborhoodSchema = new mongoose.Schema({
    geometry: {
        type: {
            type: String,
            enum: ["Polygon"],
            required: true,
            index: "2dsphere",
        },
        coordinates: {
            type: [[[Number]]],
            required: true,
        },
    },
    name: { type: String },
});

module.exports = mongoose.model("neighborhood", neighborhoodSchema);
