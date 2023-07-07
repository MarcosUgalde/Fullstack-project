const { createCompleteWorkout } = require("../../models/workouts");

module.exports = (db) => async (req, res, next) => {
  const {
    workoutName,
    user_id,
    setName,
    rounds,
    rest_time,
    exerciseName,
    description,
    duration,
  } = req.body;

  const newCompleteWorkout = await createCompleteWorkout(db)(
    workoutName,
    user_id,
    workout_id,
    setName,
    rounds,
    rest_time,
    exerciseName,
    description,
    duration
  );

  if (!newCompleteWorkout) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newCompleteWorkout.data,
  });
};
