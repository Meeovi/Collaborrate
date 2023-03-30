import passport from 'passport'

import express from 'express'
import passport from 'passport'

const AzureStoreStrategy = require('passport-azure-store');

const app = require(express())

passport.use(new AzureStoreStrategy({
    secret: 'shhhhh',
    check_expiration: true
  }, function(req, azureInfo, done) {
    var user_id = azureInfo.subscription_id + '_' + azureInfo.cloud_service_name + '_' + azureInfo.resource_name; // you can do anything with this data, typically you would have to find the user based on this data somehow
    // lookup in DB
    done(bull, user);
  }));

  app.get('/azure/sso',
  passport.authenticate('azure-store'),
  function(req, res) {
    
  })