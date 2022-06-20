const db = require('./db');
const User = require('./models/user.model');
const Role = require('./models/role.model');
const TrafficData = require('./models/traffic-data.model');
const moment = require('moment');

exports.dbSync = () => db.sequelize.sync().then(async () => {
  await Role.findOrCreate({
    where: {
      name: 'Admin',
    },
    defaults: {
      id: 1,
      name: 'Admin',
    }
  });
  await Role.findOrCreate({
    where: {
      name: 'User',
    },
    defaults: {
      id: 2,
      name: 'User',
    }
  });

  await User.findOrCreate({
    where: {
      email: 'admin@mdbootstrap.com'
    },
    defaults: {
      name: 'Admin',
      email: 'admin@mdbootstrap.com',
      password: 'mdbootstrap',
      role_id: 1,
      avatar: 'https://mdbootstrap.com/img/new/avatars/1.jpg'
    }
  });
  await User.findOrCreate({
    where: {
      email: 'user@mdbootstrap.com'
    },
    defaults: {
      name: 'User',
      email: 'user@mdbootstrap.com',
      password: 'mdbootstrap',
      role_id: 2,
      avatar: 'https://mdbootstrap.com/img/new/avatars/2.jpg'
    }
  });

  for (let i = 0; i < 5; i++) {
    await TrafficData.findOrCreate({
      where: {
        id: i + 1,
      },
      defaults: {
        'impressions': Math.floor(Math.random() * 600) + 1,
        'clicks': Math.floor(Math.random() * 100) + 5,
        'position': Math.floor(Math.random() * 50) + 10,
        'created_at': moment().subtract(i, 'days')
      }
    });
  }
});
