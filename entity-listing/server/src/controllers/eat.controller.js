const express = require("express");
const router = express.Router();

const Eat = require("../models/eat.model");

router.get("", async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 12;
        const skip = (page - 1) * pagesize;
        const filter = req.query.filter || "";

        // console.log(req.query);

        const sortType =
            req.query.sort === "lth" ? { price: 1 } : { price: -1 } || "";

        if (filter) {
            var eat = await Eat.find({ variety: filter })
                .sort(sortType)
                .skip(skip)
                .limit(pagesize)
                .lean()
                .exec();

            var totalPages = Math.ceil((await eat.length) / pagesize);
        } else {
            var eat = await Eat.find()
                .sort(sortType)
                .skip(skip)
                .limit(pagesize)
                .lean()
                .exec();

            var totalPages = Math.ceil(
                (await Eat.find().countDocuments()) / pagesize
            );
        }

        return res.status(200).send({ eat, totalPages });
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;
