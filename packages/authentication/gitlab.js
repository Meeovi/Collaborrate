import express from 'express'
import passport from 'passport'

const GitLabStrategy = require('passport-gitlab2');

const app = require(express())

passport.use(new GitLabStrategy({
    clientID: GITLAB_APP_ID,
    clientSecret: GITLAB_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/gitlab/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({gitlabId: profile.id}, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/gitlab', passport.authenticate('gitlab'));

app.get('/auth/gitlab/callback',
  passport.authenticate('gitlab', {
    failureRedirect: '/login'
  }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });