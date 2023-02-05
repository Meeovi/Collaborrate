import express from 'express'
import passport from 'passport'

const app = require(express())

var MicrosoftStrategy = require('passport-microsoft').Strategy;
passport.use(new MicrosoftStrategy({
    // Standard OAuth2 options
    clientID: 'applicationidfrommicrosoft',
    clientSecret: 'applicationsecretfrommicrosoft',
    callbackURL: "http://localhost:3000/auth/microsoft/callback",
    scope: ['user.read'],

    // Microsoft specific options

    // [Optional] The tenant for the application. Defaults to 'common'. 
    // Used to construct the authorizationURL and tokenURL
    tenant: 'common',

    // [Optional] The authorization URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`
    authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

    // [Optional] The token URL. Defaults to `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`
    tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ userId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/microsoft',
      passport.authenticate('microsoft', {
        // Optionally define any authentication parameters here
        // For example, the ones in https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow

        prompt: 'select_account',
      }));

    app.get('/auth/microsoft/callback', 
      passport.authenticate('microsoft', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });