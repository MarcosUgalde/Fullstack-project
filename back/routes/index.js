const router = require("express").Router();

const authRoutes = require("./auth");
const usersRoutes = require("./users");
const workoutRoutes = require("./workouts");

module.exports = (db) => {
  router.use("/auth", authRoutes(db));
  router.use("/users", usersRoutes());
  router.use("/workouts", workoutRoutes(db));

  return router;
};
