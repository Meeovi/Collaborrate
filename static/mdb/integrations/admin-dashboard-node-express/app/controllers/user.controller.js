const User = require('../models/user.model');
const Role = require('../models/role.model');

exports.create = (req, res) => {
  User.create({
    email: req.body.email,
    name: req.body.username,
    avatar: req.body.avatar,
    password: req.body.password,
    role_id: 2,
  })
  .then(user => {
    req.session.user = user.dataValues;
    res.redirect('/dashboard');
  })
  .catch(err => {
    res.status(500).send(err.message);
  });
}

exports.findOne = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if (user && user.validPassword(req.body.password)) {
      req.session.user = user.dataValues;
      req.session.alert = {
        message: 'User logged in',
        color: 'success'
      };
      res.redirect('/dashboard');
    } else {
      req.session.alert = {
        message: 'Wrong email or password',
        color: 'danger'
      };
      res.redirect('/');
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || 'Some error occurred'
    });
  });
}

exports.findAll = (req, res) => {
  User.findAll({
    order: [
      ['name', 'ASC']
    ],
    include: [{
      model: Role,
      as: 'role'
    }]
  })
  .then(users => {
    if (req.session.user && req.session.user.role_id === 1) {
      res.status(200).send(users);
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || 'Some error occurred'
    });
  });
}

exports.logout = (req, res) => {
  res.clearCookie('user_sid');
  res.redirect('/');
}

exports.updateProfile = (req, res) => {
  if (req.session.user) {
    User.findOne({ 
      where: {
        email: req.session.user.email
      }
    })
    .then(user => {
      user.update({
        name: req.body.name,
        avatar: req.body.avatar
      });
      req.session.user.name = req.body.name;
      req.session.user.avatar = req.body.avatar;
      req.session.alert = {
        message: 'User profile updated',
        color: 'success'
      };
      res.redirect('/user-profile');
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred'
      });
    });
  } else {
    res.redirect('/');
  }
}

exports.updateUser = (req, res) => {
  if (req.session.user && req.session.user.role_id === 1) {
    User.findOne({ 
      where: {
        id: req.params.id
      }
    })
    .then(user => {
      user.update({
        role_id: req.body.userRoleId
      });
      req.session.user.role_id = req.body.userRoleId;
      req.session.alert = {
        message: 'User role updated',
        color: 'success'
      };
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred'
      });
    });
  } else {
    res.redirect('/');
  }
}

exports.changePassword = (req, res) => {
  if (req.session.user) {
    User.findOne({ 
      where: {
        email: req.session.user.email
      }
    })
    .then(user => {
      if (user && user.validPassword(req.body.existingPassword) && req.body.newPassword === req.body.confirmNewPassword) {
        user.update({
          password: req.body.newPassword
        });
        req.session.alert = {
          message: 'User password updated',
          color: 'success'
        };
        res.redirect('/user-profile');
      } else {
        req.session.alert = {
          message: 'Wrong data',
          color: 'danger'
        };
        res.redirect('/user-profile');
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred'
      });
    });
  } else {
    res.redirect('/');
  }
}

exports.deleteUser = (req, res) => {
  if (req.session.user && req.session.user.role_id === 1) {
    User.destroy({ 
      where: {
        id: req.params.id
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred'
      });
    });
  } else {
    res.redirect('/');
  }
}