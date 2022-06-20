const express = require('express');
const router = express.Router({ mergeParams: true });
const { clearAlert } = require('../utils');

router.get('/', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/dashboard');
  } else {
    res.render('index', {
      alert: req.session.alert
    });
  }

  clearAlert(req);
});

router.use('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render('dashboard', {
      title: 'SEO dashboard',
      content: 'seo-dashboard',
      user: req.session.user,
      alert: req.session.alert
    });
  } else {
    res.redirect('/');
  }

  clearAlert(req);
});

router.use('/user-profile', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.render('dashboard', {
      title: 'My profile',
      content: 'user-profile',
      user: req.session.user,
      alert: req.session.alert
    });
  } else {
    res.redirect('/');
  }

  clearAlert(req);
});

router.use('/user-management', (req, res) => {
  if (req.session.user && req.cookies.user_sid && req.session.user.role_id === 1) {
    res.render('dashboard', {
      title: 'User management',
      content: 'user-management',
      user: req.session.user,
      alert: req.session.alert
    });
  } else {
    res.redirect('/');
  }

  clearAlert(req);
});

module.exports = router;
