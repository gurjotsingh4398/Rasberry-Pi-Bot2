const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Minor Project" });
});

router.get("/dashboard", (req, res) => {
  res.render("dash", { user: req.query.name });
});

module.exports = router;
