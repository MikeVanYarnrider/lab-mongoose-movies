const express = require("express");
const router = express.Router();
const Movies = require("../models/Movies");

router.get("/", (req, res) => {
  res.render("index.hbs");
});
