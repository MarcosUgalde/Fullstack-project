const router = require("express").Router();
const { authorizer } = require("../middlewares");

const workoutControllers = require("../controllers/workouts");

module.exports = (db) => {
  return router;
};
