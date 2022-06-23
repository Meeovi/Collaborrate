const clearAlert = (req) => {
  req.session.alert = {};
  req.session.save(err => {
    if (err) {
      throw err;
    };
  });
}

module.exports = { clearAlert };
