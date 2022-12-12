let express = require('express');
let cors = require('cors');
let app = express();

require('./config/alternate.config') // AlternateCMS main settings config file
require('../packages/authentication/index') // File for authentication used throughout AlternateCMS
require('../packages/search/index') // Supports standard search capabilities
require('../packages/email/index') // Main email functionality throughout AlternateCMS
// For Cors functionality across application
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
