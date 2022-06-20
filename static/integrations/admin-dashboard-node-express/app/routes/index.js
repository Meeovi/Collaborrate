const express = require('express');
const router = express.Router({ mergeParams: true });

router.use('/', require('./dashboard.routes'));
router.use('/users', require('./user.routes'));
router.use('/roles', require('./role.routes'));
router.use('/performance', require('./traffic-data.routes'));

module.exports = router;
