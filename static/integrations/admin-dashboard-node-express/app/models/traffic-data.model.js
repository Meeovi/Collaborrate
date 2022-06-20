const db = require('../db');
const moment = require('moment');

const TrafficData = db.sequelize.define('traffic_data', {
  id: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  impressions: {
    type: db.Sequelize.INTEGER
  },
  clicks: {
    type: db.Sequelize.INTEGER
  },
  position: {
    type: db.Sequelize.INTEGER
  },
  created_at: {
    type: db.Sequelize.DATE,
    get() {
      return moment(this.getDataValue('created_at')).format('DD-MM-YYYY');
    }
  }
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = TrafficData;
