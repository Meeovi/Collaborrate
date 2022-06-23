const express = require('express');
const router = express.Router({ mergeParams: true });
const traffic_data = require('../controllers/traffic-data.controller');

router.get('/traffic', traffic_data.findAll);

module.exports = router;
