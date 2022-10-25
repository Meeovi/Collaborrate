let express = require('express');
let cors = require('cors');
let app = express();

require('dotenv').config();
require('./config/alternate.config') // AlternateCMS main settings config file
require('../packages/authentication/index') // File for authentication used throughout AlternateCMS
require('../packages/alternate-start/metrics/metric') // Pulls in the Metrics code for application
require('../packages/search/index') // Supports standard search capabilities
require('../packages/email/index') // Main email functionality throughout AlternateCMS
require('../graphql/gql-generator')
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
app.use('/api', api);
