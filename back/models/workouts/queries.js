const { sql } = require("slonik");

const inserWorkout = (workoutName, user_id) => sql.unsafe`
    INSERT INTO workouts (
        name, creator_id
    ) VALUES (
        ${workoutName}, ${user_id}
    )
`;

const insertSet = (setName, rounds, rest_time, workout_id) => sql.unsafe`
        INSERT INTO sets (
            name, rounds, rest_time, workout_id
        ) VALUES (
            ${setName}, ${rounds}, ${rest_time}, ${workout_id}
        )
`;

const insertExercise = (
  exerciseName,
  description,
  duration,
  set_id
) => sql.unsafe`
        INSERT INTO exercises (
            name, description, duration, set_id
        ) VALUES (
            ${exerciseName}, ${description}, ${duration}, ${set_id}
        )
`;

// La siguiente query la tendré que modificar. Para la lista de workouts de un usuario no necesito toda esta información
// Para la información de un workout almacenado tampoco necesito toda esta información

const selectWorkoutsByUser = (id) => sql.unsafe`
        SELECT users.username, workouts.name, sets.name, sets.rounds, sets.rest_time, exercises.name, exercises.description, exercises.duration FROM users
        INNER JOIN workouts 
        ON users.id = workouts.creator_id
        INNER JOIN sets
        ON workouts.id = sets.workout_id
        INNER JOIN exercises
        ON sets.id = exercises.set_id
        WHERE users.id = ${id}
`;

module.exports = {
  inserWorkout,
  insertSet,
  insertExercise,
  selectWorkoutsByUser,
};
