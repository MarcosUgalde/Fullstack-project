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

const createCompleteWorkout =
  (db) =>
  async (
    workoutName,
    userName,
    setName,
    rounds,
    restTime,
    exerciseName,
    description,
    duration
  ) => {
    try {
      const response = await db.transaction(async (tx) => {
        await tx.query(insertWorkout(workoutName, userName));

        const setResponse = await tx.query(
          insertSet(setname, rounds, restTime, workout_id)
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
        message: error.messaage,
      };
    }
  };

module.exports = {
  createWorkout,
  createSet,
  createExercise,
  createCompleteWorkout,
};
