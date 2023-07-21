const { deleteWorkout } = require("../../models/workouts");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { name } = req.params;

  const result = await deleteWorkout(await db)(name);

  if (!result.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    message: "workout deleted",
  });
};
