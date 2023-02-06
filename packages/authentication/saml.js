import express from 'express'
import passport from 'passport'

const app = require(express())
const bodyParser = require("body-parser");

const SamlStrategy = require('passport-saml').Strategy;

passport.use(new SamlStrategy(
  {
    path: '/login/callback',
    entryPoint: 'https://openidp.feide.no/simplesaml/saml2/idp/SSOService.php',
    issuer: 'passport-saml',
    cert: 'fake cert', // cert must be provided
  },
  function(profile, done) {
    findByEmail(profile.email, function(err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  })
);

app.get(
    "/login",
    passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }),
    function (req, res) {
      res.redirect("/");
    }
  );
  
app.post(
    "/login/callback",
    bodyParser.urlencoded({ extended: false }),
    passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }),
    function (req, res) {
      res.redirect("/");
    }
  );