/* eslint-disable no-unused-vars */
const { PrismaClient } = require("@prisma/client");
const passport = require("./passport/jwt");
// Initialize a prisma client
const prisma = new PrismaClient();
const auth = (req, res, next) => {
try {
passport.authenticate("jwt", { session: false }, (err, user, info) => {
if (err) throw new Error(err);
if (!user) throw new Error("Invalid token..");
req.user = user;
console.log(user);
return next();
})(req, res, next);
} catch (err) {
console.error(err.message);
}
};
module.exports = auth;