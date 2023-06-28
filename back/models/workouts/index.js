const { inserWorkout, insertSet, insertExercise } = require("./queries");

const createWorkout = (db) => async (name, user_id) => {
  try {
    await db.query(inserWorkout(name, user_id));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create workout error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const createSet = (db) => async (name, rounds, rest_time, workout_id) => {
  try {
    await db.query(insertSet(name, rounds, rest_time, workout_id));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create set error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const createExercise = (db) => async (name, description, duration, set_id) => {
  try {
    await db.query(insertExercise(name, description, duration, set_id));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("Create exercise error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createWorkout,
  createSet,
  createExercise,
};
