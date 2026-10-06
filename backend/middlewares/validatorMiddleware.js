
const { validationResult } = require('express-validator');



exports.validatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  console.log("VALIDATION ERRORS =", errors.array());

  if (!errors.isEmpty()) {
    console.log("❌ VALIDATION FAILED");
    return res.status(400).json({ errors: errors.array() });
  }

  console.log("✅ VALIDATION PASSED");
  next();
};