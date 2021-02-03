var express = require("express");

var router = express.Router();

var burgerCon = require("../models/burger.js");

router.get("/", function (req, res) {
    burgerCon.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burgerCon.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(["devoured"], [req.body.devoured], condition, function (result) {
        res.json(result);
    });
});


















module.exports = router;