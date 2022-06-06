const express = require("express");
const router = express.Router();

const Eat = require("../models/eat.model");

router.get("", async (req, res) => {
    try {
        const eat = await Eat.find().lean().exec();
        return res.status(200).send(eat);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
