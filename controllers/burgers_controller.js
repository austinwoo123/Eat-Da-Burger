var express = require("express");

var router = express.Router();

var burgerCon = require("../models/burger.js");

router.get("/", function (req, res) {
    burgerCon.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




















module.exports = router;