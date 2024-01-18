const { body, validationResult } = require("express-validator");

const validateUser = [
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters")
    .trim()
    .escape(),
  // body("phoneNumber")
  //   .matches(/^\+[1-9]\d{1,14}$/)
  //   .withMessage("Please enter a valid phone number"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser };
