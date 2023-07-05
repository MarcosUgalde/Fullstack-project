const { createExercise } = require("../../models/workouts");

module.exports = (db) => async (req, res, next) => {
  const { name, description, duration, set_id } = req.body;

  const newExercise = await createExercise(await db)(
    name,
    description,
    duration,
    set_id
  );

  if (!newExercise) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newExercise.data,
  });
};
