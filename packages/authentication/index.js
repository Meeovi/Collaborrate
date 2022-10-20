<<<<<<< HEAD
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
=======
>>>>>>> 5c2d2fa3d9d8b5b5f3ca166323648f1f4edbfcc9
