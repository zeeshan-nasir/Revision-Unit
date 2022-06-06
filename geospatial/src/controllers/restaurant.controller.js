const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restuarant.model");

const lat = 32.732998;
const long = 74.864273;

router.get("/nearme", async (req, res) => {
    try {
        var METERS_PER_MILE = 1609.34;
        const restaurants = await Restaurant.find({
            location: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [long, lat],
                    },
                    $maxDistance: 1 * METERS_PER_MILE,
                },
            },
        });
        return res.status(200).send({ restaurants });
    } catch (error) {
        console.log("error:", error);
    }
});

module.exports = router;
