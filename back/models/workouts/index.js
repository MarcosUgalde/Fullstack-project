const {
  insertWorkout,
  insertSet,
  insertExercise,
  selectWorkoutsByUser,
  selectOneWorkout,
  deleteOneWorkout,
} = require("./queries");

const createWorkout = (db) => async (workoutName, user_id) => {
  try {
    const workout = await db.query(insertWorkout(workoutName, user_id));

    return {
      ok: true,
      data: workout,
    };
  } catch (error) {
    console.info("Create workout error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const createSet = (db) => async (setName, rounds, rest_time, workoutId) => {
  try {
    const set = await db.query(
      insertSet(setName, rounds, rest_time, workoutId)
    );
    /*     const response = await db.transaction(async (tx) => {
      await tx.query(insertSet(name, rounds, rest_time, workout_id));
      await tx.query(insertWorkout(name, user_id));
      await tx.query(insertExercise(name, description, duration, set_id));

      await createExercise(tx)(name, description, duration, set_id);

      return false;
    });*/
    return {
      ok: true,
      data: set,
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
      const exercise = await db.query(
        insertExercise(exerciseName, description, duration, set_id)
      );
      return {
        ok: true,
        data: exercise,
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
    setName,
    rounds,
    rest_time,
    exerciseName,
    description,
    duration
  ) => {
    try {
      const connection = await db;
      const response = await connection.transaction(async (tx) => {
        console.log("workout y user: ", workoutName, user_id);

        const workoutResult = await tx.query(
          insertWorkout(workoutName, user_id)
        );

        const setResponse = await tx.query(
          insertSet(setName, rounds, rest_time, workoutResult.rows[0].id)
        );
        console.log(
          exerciseName,
          description,
          duration,
          setResponse.rows[0].id
        );
        //const set_id = setResponse.insertId;

        await tx.query(
          insertExercise(
            exerciseName,
            description,
            duration,
            setResponse.rows[0].id
          )
        );

        return {
          ok: true,
        };
      });
      console.log("response: ", response);
      return response;
    } catch (error) {
      console.info("Create complete workout error: ", error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };

const getWorkoutsByUser = (db) => async (email) => {
  try {
    const response = await db.query(selectWorkoutsByUser(email));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Get workouts by user error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getOneWorkout = (db) => async (id) => {
  try {
    const response = await db.query(selectOneWorkout(id));

    return {
      ok: true,
      data: response.rows,
    };
  } catch (error) {
    console.info("Get one workout error: ", error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const deleteWorkout = (db) => async (name) => {
  try {
    await db.query(deleteOneWorkout(name));

    return {
      ok: true,
    };
  } catch (error) {
    console.info("Delete workout error: ", error.message);
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
  createCompleteWorkout,
  getWorkoutsByUser,
  getOneWorkout,
  deleteWorkout,
};
