const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("", async (req, res) => {
    try {
        const user = await User.find()
            // .populate({
            //     path: "review",
            // })
            // .populate({
            //     path: "order",
            // })
            .lean()
            .exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        // console.log(user);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        // .populate({
        // path: "review",
        // })
        // .populate({
        // path: "order",
        // });
        // console.log(user);

        const total = User.aggregate([
            {
                $group: {
                    total: {
                        $sum: { $multiply: ["$price", "$quantity"] },
                    },
                    count: { $sum: 1 },
                },
            },
        ]);
        
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        // console.log(req.body);
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        // .populate({
        //     path: "review",
        // })
        // .populate({
        //     path: "order",
        // });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.get("/:id/addresses", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).send(user.addresses);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/:id/addresses/create", async (req, res) => {
    try {
        const user = await User.updateOne(
            { _id: req.params.id },
            {
                $push: { addresses: req.body },
            }
        );
        // console.log(user);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.delete("/:id/addresses/:idx/edit", async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        var arrIndex = `addresses.${req.params.idx}`;

        await User.updateOne(
            { _id: req.params.id },
            { $unset: { [arrIndex]: 1 } }
        );
        await User.updateOne(
            { _id: req.params.id },
            { $pull: { addresses: null } }
        );
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
