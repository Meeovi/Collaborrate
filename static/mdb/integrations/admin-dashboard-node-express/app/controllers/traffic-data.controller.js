const TrafficData = require('../models/traffic-data.model');

exports.findAll = (req, res) => {
  TrafficData.findAll({
    attributes: [
      'created_at',
      'impressions',
      'clicks',
      'position'
    ],
    order: [
      ['created_at', 'ASC']
    ]
  })
  .then(data => {
    res.status(200).send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}