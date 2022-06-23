const db = require('../db');
const User = require('./user.model');

const Role = db.sequelize.define('role', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: db.Sequelize.STRING(255),
    allowNull: false
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

Role.hasMany(User, {
  foreignKey: 'role_id',
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role'
});

module.exports = Role;
