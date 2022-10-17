"use strict";
/*
 *  auth.js
 *
 *  Express auth route
 *
 */
const { Router } = require("express");
const passport = require("passport");
const router = Router();

router.post("/auth", (req, res, next) => {
  return passport.authenticate("local", (err = {}, token) => {
    if (err || !token) {
      const { message = "E_FORBIDDEN" } = err;
      return res.status(message === "E_UNFOUND" ? 404 : 401).send({ message });
    }

    // Sign the user
    req.login(token, { session: false }, (err) => {
      if (err) {
        // It should not happen
        return res.status(503).send({ err });
      }
      return res.status(200).send({ token });
    });
  })(req, res, next);
});

module.exports = router;
