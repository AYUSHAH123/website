const express = require("express");
const router = express.Router();

router.get("/", (req,res) =>(
    res.render("main")
));

router.get("/About-Us", (req,res) =>(
    res.send("About Us page")
));

router.get("/Quiz", (req,res) =>(
    res.send("Quiz Page")
));

router.get("/Tornaments", (req,res) =>(
    res.send("Tornaments page")
));

module.exports = router;