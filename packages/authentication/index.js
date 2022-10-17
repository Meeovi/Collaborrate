<<<<<<< HEAD
require('dotenv').config();

import { GraphQLServer } from 'graphql-yoga';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import refresh from 'passport-oauth2-refresh';
import { formatError } from 'apollo-errors';

import routes from './routes';
import middleware from './middleware';

import jwtStrategy from './passport/jwt';
import localStrategy from './passport/local';

import debug from './passport/debug';

const passportServer = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (req, res) => {
    const { response } = req;
    const { user } = req.request;
    return { response, user };
  }
});

initDatabase();

passport.use(localStrategy);
refresh.use(localStrategy);
passport.use('jwt', jwtStrategy);

passportServer.use(cookieParser());
passportServer.use(bodyParser());
passportServer.use(passport.initialize());

debug(passportServer);

passportServer.use('/auth/connect', middleware.local.redirect, () => {});
passportServer.use('/auth/callback', middleware.local.base, routes.login);
passportServer.use('/loginfailure', routes.loginFailure);
passportServer.use('/logout', routes.logout);
passportServer.use('/app', middleware.auth, routes.app);
passportServer.use('/user', passport.authenticate(['jwt'], { session: false }), routes.user);
passportServer.use('/token', passport.authenticate(['jwt'], { session: false }), routes.token);

const options = {
  endpoint: '/graphql',
  port: PORT,
  playground: '/playground',
  formatError
};

passportServer.express.use(cookieParser());
passportServer.express.use(passport.initialize());
passportServer.express.post('/graphql', passport.authenticate(['jwt'], { session: false }));

module.exports = {
  passportServer
}
=======
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');
const io = require('socket.io-client');
const auth = require('@feathersjs/authentication-client');

const socket = io('http://api.feathersjs.com');
const app = feathers();

// Setup the transport (Rest, Socket, etc.) here
app.configure(socketio(socket));

// Available options are listed in the "Options" section
app.configure(auth())
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
