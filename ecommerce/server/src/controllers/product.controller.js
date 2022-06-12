const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("", async (req, res) => {
    try {
        const product = await Product.find()
            // .populate({
            //     path: "review",
            // })
            // .populate({
            //     path: "category",
            // })
            // .populate({
            //     path: "brand",
            // })
            .lean()
            .exec();

        const avgRating = Product.aggregate([
            {
                $lookup: {
                    from: "review",
                    localField: "reviews",
                    foreignField: "_id",
                    as: "reviews",
                },
            },
            {
                $unwind: "$reviews",
            },
            {
                $group: {
                    _id: null,
                    ratingAvg: {
                        $avg: "$reviews.rating",
                    },
                },
            },
        ]);
        return res.status(200).send({ product, avgRating });
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

        const orders = Product.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    orders: { $sum: 1 },
                },
            },
        ]);

        return res.status(200).send({ product, ordersPerMonth });
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        // .populate({
        //     path: "review",
        // })
        // .populate({
        //     path: "category",
        // })
        // .populate({
        //     path: "brand",
        // });
        return res.status(200).send(product);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
