import passport from 'passport'

passport.use(new AmazonStrategy({
    clientID: AMAZON_CLIENT_ID,
    clientSecret: AMAZON_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/amazon/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ amazonId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));