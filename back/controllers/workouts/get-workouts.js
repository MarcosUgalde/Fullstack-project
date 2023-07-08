const { getWorkoutsByUser } = require("../../models/workouts");

module.exports = (db) => async (req, res, next) => {
  const { email } = res.locals;
  const workouts = await getWorkoutsByUser(await db)(email);

  if (!workouts.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: workouts.data,
  });
};
