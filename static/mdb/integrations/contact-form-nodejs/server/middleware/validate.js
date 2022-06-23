const { body, validationResult } = require("express-validator");

module.exports = [
  body("name").notEmpty().withMessage("You must supply a name"),
  body("email").isEmail().normalizeEmail().withMessage("Email is not valid"),
  body("subject").notEmpty().withMessage("You must supply a subject"),
  body("message").notEmpty().withMessage("You must supply a message"),
  body("mailCopy").toBoolean(),
  function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
