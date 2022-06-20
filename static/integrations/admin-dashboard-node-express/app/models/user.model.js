const db = require('../db');
const bcrypt = require('bcrypt');

const User = db.sequelize.define('user', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 4
    }
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 4
    }
  },
  avatar: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  role_id: {
    type: db.Sequelize.INTEGER,
    allowNull: true
  },
  created_at: {
    type: db.Sequelize.DATE
  },
  updated_at: {
    type: db.Sequelize.DATE
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    },
    beforeUpdate: (user) => {
      if (user.changed('password')) {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.dataValues.password, salt);
      }
    }
  }
});

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
