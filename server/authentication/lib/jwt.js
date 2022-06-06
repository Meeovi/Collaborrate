/* eslint-disable no-undef */
/* eslint-disable camelcase */
const {
  Strategy,
  ExtractJwt
} = require("passport-jwt");
const {
  PrismaClient
} = require("@prisma/client");
const passport = require("passport");
require("dotenv").config();
// Initialize a prisma client
const prisma = new PrismaClient();
// Set strategy options
const options = {
  passReqToCallback: true,
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

passport.use(
  new Strategy(options, async (jwt_payload, cb) => {
    await prisma.user
      .findUnique({
        where: {
          id: jwt_payload
        }
      })
      .then((user) => cb(null, user))
      .catch((e) => cb(err));
  })
);
module.exports = passport;
