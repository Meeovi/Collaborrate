import express from 'express'
import passport from 'passport'

const BitbucketStrategy = require('passport-bitbucket');

const app = require(express())

passport.use(new BitbucketStrategy({
    consumerKey: BITBUCKET_CONSUMER_KEY,
    consumerSecret: BITBUCKET_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/bitbucket/callback"
  },
  function(token, tokenSecret, profile, cb) {
    User.findOrCreate({ bitbucketId: profile.username }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/bitbucket',
  passport.authenticate('bitbucket'));

app.get('/auth/bitbucket/callback', 
  passport.authenticate('bitbucket', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });