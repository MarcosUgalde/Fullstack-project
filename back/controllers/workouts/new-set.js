const { createSet } = require("../../models/workouts");

module.exports = (db) => async (req, res, next) => {
  const { setName, rounds, rest_time, workout_id } = req.body;

  const newSet = await createSet(await db)(
    setName,
    rounds,
    rest_time,
    workout_id
  );

  if (!newSet.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newSet.data,
  });
};
