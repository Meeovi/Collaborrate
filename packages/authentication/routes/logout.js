"use strict";
/*
 *  logout.js
 *
 *  Express logout route
 *
 */
const { Router } = require("express");
const router = Router();

router.post("/logout", function (req, res, next) {
  console.log("LOGOUT");
  res.sendStatus(200);
});

module.exports = router;
