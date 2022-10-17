let express = require('express');
let cors = require('cors');
let app = express();

require('dotenv').config();
<<<<<<< HEAD
require('../static/scripts/upload') // For AlternateCMS main upload functionality
require('./config/alternate.config') // AlternateCMS main settings config file
require('../packages/authentication/index') // File for authentication used throughout AlternateCMS
require('../packages/alternate-start/metrics/metric') // Pulls in the Metrics code for application
require('../packages/alternate-start/databases/dynamodb') // File for Dynamodb connection
require('../packages/alternate-start/deployments/kubernetes') // File supporting deployment to kubernetes
require('../packages/search/index') // Supports standard search capabilities
require('../packages/email/index') // Main email functionality throughout AlternateCMS
require('../server/codegen') // Codegen File
=======
require('./config/alternate.config') // AlternateCMS main settings config file
require('../packages/authentication/index') // File for authentication used throughout AlternateCMS
require('../packages/alternate-start/metrics/metric') // Pulls in the Metrics code for application
require('../packages/search/index') // Supports standard search capabilities
require('../packages/email/index') // Main email functionality throughout AlternateCMS
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194

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
