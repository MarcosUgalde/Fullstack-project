const { createExercise } = require("../../models/workouts");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { exerciseName, description, duration, set_id } = req.body;

  const newExercise = await createExercise(await db)(
    exerciseName,
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
