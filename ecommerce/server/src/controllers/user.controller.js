const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/edit", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.get("/:id/addresses", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).send(user.address);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.post("/:id/addresses/create", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $push: { address: req.body.address },
        });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

router.patch("/:id/addresses/:idx/edit", async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        let address = user.address;
        let updated = address.splice(req.params.idx, 1);
        user = await User.findByIdAndUpdate(req.params.id, {
            address: updated,
        });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(400).send(err);
    }
});

module.exports = router;
