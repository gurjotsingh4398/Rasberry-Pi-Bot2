const express = require("express");
const router = express.Router();

const User = require("../db/User");

module.exports = passport => {
  router.post("/signup", function(req, res) {
    let { username, password } = req.body;

    User.findOne({ username: username }, (err, doc) => {
      if (err) {
        res.status(500).send("error occured");
      } else {
        if (doc) {
          res.status(500).send("Username Already exist");
        } else {
          let record = new User();
          record.username = username;
          record.password = record.hashPassword(password);
          record.save((err, user) => {
            if (err) {
              res.status(500).send("Database Error");
            } else {
              res.redirect("/login");
            }
          });
        }
      }
    });
  });

  router.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/dashboard"
    }),
    (req, res) => {
      res.send("hello");
    }
  );

  return router;
};
