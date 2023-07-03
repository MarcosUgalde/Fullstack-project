const { createWorkout } = require("../../models/workouts");

module.exports = (db) => async (req, res, next) => {
  const { name, user_id } = req.body;
  // const { user_id } = req.params;
  const newWorkout = await createWorkout(await db)(name, user_id);

  if (!newWorkout.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newWorkout.data,
  });
};
