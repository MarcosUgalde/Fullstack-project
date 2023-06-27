const { hash, serialize } = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const { selecUser } = require("../../models/auth");

module.exports = (db) => async (req, res, next) => {
  const { email, password } = req.body;

  const response = await selecUser(await db)(email, hash.compare(password));

  if (!response.ok) return next(errors[response.error_code || 500]);

  serialize(res, response.content);

  res.status(200).json({
    success: true,
  });
};
