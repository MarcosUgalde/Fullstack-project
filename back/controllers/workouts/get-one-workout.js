const { getOneWorkout } = require("../../models/workouts");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { name } = req.params;
  const workout = await getOneWorkout(await db)(name);

  if (!workout) return next(errors[500]);

  return res.status(200).json({
    success: true,
    data: workout.data,
  });
};
