import express from 'express'
var DiscordStrategy = require('passport-discord').Strategy;

var scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.use(new DiscordStrategy({
    clientID: 'id',
    clientSecret: 'secret',
    callbackURL: 'callbackURL',
    scope: scopes
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ discordId: profile.id }, function(err, user) {
        return cb(err, user);
    });
}));

app.get('/auth/discord', passport.authenticate('discord'));

app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/secretstuff') // Successful auth
});