import express from 'express'
import passport from 'passport'

const SlackStrategy = require('passport-slack-oauth2');

const app = require(express())

passport.use(new SlackStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    skipUserProfile: false, // default
    scope: ['identity.basic', 'identity.email', 'identity.avatar', 'identity.team'] // default
  },
  (accessToken, refreshToken, profile, done) => {
    // optionally persist user data into a database
    done(null, profile);
  }
));

app.get('/auth/slack', passport.authorize('Slack'));

app.get('/auth/slack/callback',
  passport.authenticate('Slack', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/') // Successful authentication, redirect home.
);