const express = require('express');
const router = express.Router({ mergeParams: true });
const roles = require('../controllers/role.controller');

router.get('/', roles.findAll);

module.exports = router;