const {
  inserWorkout,
  insertSet,
  insertExercise,
  selectWorkoutsByUser,
} = require("./queries");

const createWorkout = (db) => async (workoutName, user_id) => {
  try {
    await db.query(inserWorkout(workoutName, user_id));

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

const createSet = (db) => async (setName, rounds, rest_time, workout_id) => {
  try {
    await db.query(insertSet(setName, rounds, rest_time, workout_id));
    /*     const response = await db.transaction(async (tx) => {
      await tx.query(insertSet(name, rounds, rest_time, workout_id));
      await tx.query(insertWorkout(name, user_id));
      await tx.query(insertExercise(name, description, duration, set_id));

      await createExercise(tx)(name, description, duration, set_id);

      return false;
    });*/
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

const createExercise =
  (db) => async (exerciseName, description, duration, set_id) => {
    try {
      await db.query(
        insertExercise(exerciseName, description, duration, set_id)
      );
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

const createCompleteWorkout =
  (db) =>
  async (
    workoutName,
    user_id,
    workout_id,
    setName,
    rounds,
    rest_time,
    exerciseName,
    description,
    duration
  ) => {
    try {
      const response = await db.transaction(async (tx) => {
        await tx.query(insertWorkout(workoutName, user_id));

        const setResponse = await tx.query(
          insertSet(setName, rounds, rest_time, workout_id)
        );

        const set_id = setResponse.insertId;

        await tx.query(
          insertExercise(exerciseName, description, duration, set_id)
        );

        return {
          ok: true,
        };
      });

      return response;
    } catch (error) {
      console.info("Create complete workout error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getWorkoutsByUser = (db) => async (id) => {
  try {
    await db.maybeOne(selectWorkoutsByUser(id));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Get workouts by user error: ", error.message);
    return {
      ok: true,
      message: error.message,
    };
  }
};

module.exports = {
  createWorkout,
  createSet,
  createExercise,
  createCompleteWorkout,
  getWorkoutsByUser,
};
