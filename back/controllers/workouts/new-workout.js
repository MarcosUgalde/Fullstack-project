const { createWorkout } = require("../../models/workouts");
const errors = require("../../misc/errors");

module.exports = (db) => async (req, res, next) => {
  const { name } = req.body;
  const { id } = res.locals;
  console.log(res.locals);
  console.log(name, id);
  // const { user_id } = req.params;
  const newWorkout = await createWorkout(await db)(name, id);

  if (!newWorkout.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: newWorkout.data,
  });
};
