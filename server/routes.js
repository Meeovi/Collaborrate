const router = require("express").Router();
const passport = require("passport");
const {
  generateToken
} = require("./utils");
router.post("/signup", (req, res, next) => {
  passport.authenticate("signup", {
    session: false
  }, (err, user, info) => {
    // Check for errors
    if (err) throw new Error(err);
    // Generate token
    const token = generateToken(user.id);
    return res.status(201).json({
      status: "success",
      data: {
        message: "Account created.",
        user,
        token
      },
      statusCode: res.statusCode
    });
  })(req, res, next);
});
router.post("/login", (req, res, next) => {
  passport.authenticate("login", {
    session: false
  }, (err, user, info) => {
    // Check for errors
    if (err) throw new Error(err);
    // Generate token
    const token = generateToken(user.id);
    return res.status(201).json({
      status: "success",
      data: {
        message: "Welcome back.",
        user,
        token
      },
      statusCode: res.statusCode
    });
  })(req, res, next);
});
module.exports = router;
const auth = require("./authorization.js");
router.get("/profile", auth, (req, res, next) => {
  return res.json({
    message: "Welcome friend",
    user: req.user
  })
})
