import express from 'express'
import passport from 'passport'

const app = require(express())

import MagicLoginStrategy from "passport-magic-login"

// IMPORTANT: ALL OPTIONS ARE REQUIRED!
const magicLogin = new MagicLoginStrategy({
  // Used to encrypt the authentication token. Needs to be long, unique and (duh) secret.
  secret: process.env.MAGIC_LINK_SECRET,

  // The authentication callback URL
  callbackUrl: "/auth/magiclogin/callback",

  // Called with th e generated magic link so you can send it to the user
  // "destination" is what you POST-ed from the client
  // "href" is your confirmUrl with the confirmation token,
  // for example "/auth/magiclogin/confirm?token=<longtoken>"
  sendMagicLink: async (destination, href) => {
    await sendEmail({
      to: destination,
      body: `Click this link to finish logging in: https://yourcompany.com${href}`
    })
  },

  // Once the user clicks on the magic link and verifies their login attempt,
  // you have to match their email to a user record in the database.
  // If it doesn't exist yet they are trying to sign up so you have to create a new one.
  // "payload" contains { "destination": "email" }
  // In standard passport fashion, call callback with the error as the first argument (if there was one)
  // and the user data as the second argument!
  verify: (payload, callback) => {
    // Get or create a user with the provided email from the database
    getOrCreateUserWithEmail(payload.destination)
      .then(user => {
        callback(null, user)
      })
      .catch(err => {
        callback(err)
      })
  }
})

// Add the passport-magic-login strategy to Passport
passport.use(magicLogin)

app.post("/auth/magiclogin", magicLogin.send);

app.get(magicLogin.callbackUrl, passport.authenticate("magiclogin"));
