const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("", async (req, res) => {
    try {
        const product = await Product.find()
            .populate({
                path: "review",
            })
            .populate({
                path: "category",
            })
            .populate({
                path: "brand",
            })
            .lean()
            .exec();
        return res.status(200).send(product);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(200).send(product);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).send(product);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
            .populate({
                path: "review",
            })
            .populate({
                path: "category",
            })
            .populate({
                path: "brand",
            });
        return res.status(200).send(product);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
