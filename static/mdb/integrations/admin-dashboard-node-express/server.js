const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const config = require('./app/config');
const { clearCookie } = require('./app/middlewares/clear-cookie');
const { dbSync } = require('./app/sync');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(session({
  key: 'user_sid',
  secret: 'random',
  alert: {},
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

app.use(clearCookie);

app.use(require('./app/routes'));

dbSync()
  .then(() => app.listen(config.port, () => console.log(`Server is running on port ${config.port}.`)))
  .catch((err) => console.log(err));
