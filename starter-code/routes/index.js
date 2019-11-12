const express = require("express");
const router = express.Router();
const Celebrities = require("../models/Celebrities");
const Movies = require("../models/Movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
