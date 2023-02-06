import express from 'express'
import passport from 'passport'

const RedditStrategy = require('passport-reddit');

const app = require(express())

passport.use(new RedditStrategy({
    clientID: REDDIT_CONSUMER_KEY,
    clientSecret: REDDIT_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/reddit/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ redditId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

app.get('/auth/reddit', function(req, res, next){
    passport.authenticate('reddit', {
      duration: 'permanent',
    })(req, res, next);
  });
  
  app.get('/auth/reddit/callback', function(req, res, next){
    passport.authenticate('reddit', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next);
  });