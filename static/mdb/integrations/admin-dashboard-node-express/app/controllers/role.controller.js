const Role = require('../models/role.model');

exports.findAll = (req, res) => {
  Role.findAll({
    order: [
      ['id', 'ASC']
    ]
  })
  .then(roles => {
    res.status(200).send(roles);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
}