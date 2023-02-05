let express = require('express');
let cors = require('cors');
let app = express();

const uploadFile = require('../packages/core/uploads/index') // Uses Fastify-Multer for file uploads
const alternateConfig = require('./config/alternate.config') // AlternateCMS main settings config file
const alternateAuth = require('../packages/authentication/index') // File for authentication used throughout AlternateCMS
const alternateSearch = require('../packages/search/index') // Supports standard search capabilities
const alternateEmail = require('../packages/email/index') // Main email functionality throughout AlternateCMS

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

module.exports = () => {
    uploadFile,
    alternateConfig,
    alternateAuth,
    alternateSearch,
    alternateEmail
}