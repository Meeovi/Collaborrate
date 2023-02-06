import express from 'express'
import passport from 'passport'

const OktaStrategy = require('passport-okta-oauth');

const app = require(express())

passport.use(new OktaStrategy({
    audience: process.env.OKTA_AUDIENCE,   
      // audience is the Okta Domain, 
      // e.g. https://example.okta.com, https://example.oktapreview.com
  
    clientID: process.env.OKTA_CLIENTID,
      // clientID is the public Okta Application Client Credentials, 
      // its a 20 character alphanumeric string
      // e.g. U7VYvsaiuqlDOHjIVTIA  (generated example)
  
    clientSecret: process.env.OKTA_CLIENTSECRET,
      // clientSecret is the private Okta Application Client Credentials, 
      // its a 40 character alphanumeric string with a hypen(s).
      // e.g. Vwb-R4fQnSH7uJkokDhPI-WR4qEiuWFokYANM5C  (generated example)
  
    idp: process.env.OKTA_IDP,
      // idp is the Identity Provider (id). This is an optional field
      // its a 20 character alphanumeric string
      // e.g. qOp8aaJmCEhvep5Il6ZJ  (generated example)
  
    scope: ['openid', 'email', 'profile'],
    response_type: 'code',
    callbackURL: baseURL + "/auth/okta/callback"
      // callbackURL is the redirect URL Okta should return the user to
      // This is a URL on your server
  
  }, function(accessToken, refreshToken, profile, done) {
    // Example Callback to Handle the Profile Object
  
    return profile
  }));