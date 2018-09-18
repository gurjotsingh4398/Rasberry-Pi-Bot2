const express = require("express");
const router = express.Router();

const loggedin = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
};

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Minor Project" });
});

router.get("/login", (req, res, next) => {
  res.render("login");
});

router.get("/signup", (req, res, next) => {
  res.render("signup");
});

router.get("/dashboard", loggedin, (req, res, next) => {
  console.log(req.user.username);
  res.render("dash", { user: req.user.username });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
