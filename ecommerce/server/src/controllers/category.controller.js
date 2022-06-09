const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("", async (req, res) => {
    try {
        const category = await Category.find()
            .populate({
                path: "product",
            })
            .lean()
            .exec();
        return res.status(200).send(category);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(200).send(category);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate({
            path: "product",
        });
        return res.status(200).send(category);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            req.body
        ).populate({
            path: "product",
        });
        return res.status(200).send(category);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
