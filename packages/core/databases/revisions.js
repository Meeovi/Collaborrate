require('dotenv').config();

var PouchDB = require('pouchdb');
var db = new PouchDB('mydb');
var remoteDB = new PouchDB(process.env.DATABASE_URL);

PouchDB.plugin(require('pouchdb-full-sync'));

// fully replicate to another database
db.fullyReplicateTo(remoteDB);

// fully replicate from another database
db.fullyReplicateFrom(remoteDB);

// fully sync two databases
db.fullySync(remoteDB, {
    live: true,
    retry: true
  }).on('change', function (info) {
    // handle change
  }).on('paused', function () {
    // replication paused (e.g. user went offline)
  }).on('active', function () {
    // replicate resumed (e.g. user went back online)
  }).on('denied', function (info) {
    // a document failed to replicate, e.g. due to permissions
  }).on('complete', function (info) {
    // handle complete
  }).on('error', function (err) {
    // handle error
  });