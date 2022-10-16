"use strict";
/*
 *  twitter.js
 *
 *  Local passport strategy
 *
 */
const { Strategy } = require("passport-twitter");
const mockedUsers = [
  { emailAddress: "test@example.com", password: "test1234" }
];

module.exports = new Strategy(
  { usernameField: "emailAddress", session: false },
  async (emailAddress, password, done) => {
    try {
      // Verify if user exist (good place to check email presency in database)
      const userRecord = mockedUsers.find(
        ({ emailAddress: userEmail }) => userEmail === emailAddress
      );
      if (!userRecord) {
        throw new Error("E_UNFOUND");
      }

      if (userRecord.password !== password) {
        throw new Error("E_WRONG_PASSWORD");
      }
      const token = "abcdef";
      return done(null, token);
    } catch (err) {
      return done(err, undefined);
    }
  }
); 
