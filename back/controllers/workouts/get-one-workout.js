const { getOneWorkout } = require("../../models/workouts");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;
  const workout = await getOneWorkout(await db)(id);

  if (!workout) return next(errors[500]);

  return res.status(200).json({
    success: true,
    data: workout.data,
  });
};
