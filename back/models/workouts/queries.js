const { sql } = require("slonik");

const insertWorkout = (workoutName, user_id) => sql.unsafe`
    INSERT INTO workouts (
        workout_name, creator_id
    ) VALUES (
        ${workoutName}, ${user_id}
    )
    RETURNING id
`;

const insertSet = (setName, rounds, rest_time, workoutId) => sql.unsafe`
        INSERT INTO sets (
            set_name, rounds, rest_time, workout_id
        ) VALUES (
            ${setName}, ${rounds}, ${rest_time}, ${workoutId}
        )
        RETURNING id
`;

const insertExercise = (
  exerciseName,
  description,
  duration,
  set_id
) => sql.unsafe`
        INSERT INTO exercises (
            exercise_name, description, duration, set_id
        ) VALUES (
            ${exerciseName}, ${description}, ${duration}, ${set_id}
        )
`;

const selectWorkoutsByUser = (email) => sql.unsafe`
        SELECT  users.id, workouts.workout_name, workouts.id FROM users
        INNER JOIN workouts 
        ON users.id = workouts.creator_id
        WHERE users.email = ${email}
`;

const selectOneWorkout = (id) => sql.unsafe`
            SELECT workouts.workout_name, sets.set_name, sets.rounds, sets.rest_time, exercises.exercise_name, exercises.description, exercises.duration FROM  workouts
            INNER JOIN sets 
            ON workouts.id = sets.workout_id
            INNER JOIN  exercises
            ON sets.id = exercises.set_id
            WHERE workouts.id = ${id} 
`;

const deleteOneWorkout = (name) => sql.unsafe`
            DELETE from workouts
            WHERE workout_name = ${name}
`;

module.exports = {
  insertWorkout,
  insertSet,
  insertExercise,
  selectWorkoutsByUser,
  selectOneWorkout,
  deleteOneWorkout,
};
