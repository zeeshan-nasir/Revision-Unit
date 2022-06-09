const express = require("express");
const router = express.Router();
const Brand = require("../models/brands.model");

router.get("", async (req, res) => {
    try {
        const brand = await Brand.find()
            // .populate({
            //     path: "product",
            // })
            .lean()
            .exec();
        return res.status(200).send(brand);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/create", async (req, res) => {    
    try {
        const brand = await Brand.create(req.body);
        return res.status(200).send(brand);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id).populate({
            path: "product",
        });
        return res.status(200).send(brand);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(brand);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
