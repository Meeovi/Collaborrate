const {
  PrismaClient
} = require("@prisma/client");
const {
  Strategy
} = require("passport-local");
const {
  hash,
  compare
} = require("../utils");
const passport = require("passport");
require("dotenv").config();
// Initialize a prisma client
const prisma = new PrismaClient();
// Set strategy options
const options = {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true
};
module.exports = {
  // Passport middleware to signup users
  passport.use(
    "signup",
    new Strategy(options, async (req, email, password, cb) => {
      try {
        // Check if user found
        const existsEmail = await prisma.user.findFirst({
          where: {
            email
          }
        });
        if (existsEmail)
          return cb(null, false, {
            message: "Email already exists.",
            statusCode: 400
          });
        // Create the user
        const user = await prisma.user.create({
          data: {
            name: req.body.name,
            email,
            password: await hash(password)
          }
        });
        return cb(null, user);
      } catch (err) {
        console.error(err.message);
        return cb(null, err);
      }
    })
  );
  // Passport middleware to login users
  options.passReqToCallback = false,
  passport.use(
    "login",
    new Strategy(options, async (email, password, cb) => {
      try {
        // Check if user found
        const user = await prisma.user.findFirst({
          where: {
            email
          }
        });
        if (!user)
          return cb(null, false, {
            message: "No user found.",
            statusCode: 400
          });
        // Compare password
        const validPassword = await compare(password, user.password);
        if (!validPassword)
          return cb(null, false, {
            message: "Invalid credentials.",
            statusCode: 401
          });
        return cb(null, user);
      } catch (err) {
        console.error(err.message);
        return cb(null, err);
      }
    })
  );
}
