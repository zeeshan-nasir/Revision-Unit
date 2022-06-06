const express = require("express");
const router = express.Router();

const Eat = require("../models/eat.model");

router.get("", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 12;

        const skip = (page - 1) * pagesize;

        const eat = await Eat.find().skip(skip).limit(pagesize).lean().exec();

        const totalPages = Math.ceil(
            (await Eat.find().countDocuments()) / pagesize
        );

        return res.status(200).send({ eat, totalPages });
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
