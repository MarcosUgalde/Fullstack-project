const router = require("express").Router();
const { authorizer } = require("../middlewares");

const workoutControllers = require("../controllers/workouts");

module.exports = (db) => {
  router.post("/create", authorizer, workoutControllers.addWorkout(db));
  router.post("/newset", authorizer, workoutControllers.addSet(db));
  router.post("/newexercise", authorizer, workoutControllers.addExercise(db));
  router.post(
    "/newworkout",
    authorizer,
    workoutControllers.addCompleteWorkout(db)
  );

  return router;
};
