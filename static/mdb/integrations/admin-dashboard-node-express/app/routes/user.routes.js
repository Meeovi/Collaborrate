const express = require('express');
const router = express.Router({ mergeParams: true });
const users = require('../controllers/user.controller');

router.post('/auth/register', users.create);

router.post('/auth/login', users.findOne);

router.post('/auth/logout', users.logout);

router.post('/', users.updateProfile);

router.get('/', users.findAll);

router.put('/:id', users.updateUser);

router.delete('/:id', users.deleteUser);

router.post('/password', users.changePassword);

module.exports = router;
