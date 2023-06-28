const { sql } = require("slonik");

const inserWorkout = (name, user_id) => sql.unsafe`
    INSERT INTO workouts (
        name, creator_id
    ) VALUES (
        ${name}, ${user_id}
    )
`;

const insertSet = (name, rounds, rest_time, workout_id) => sql.unsafe`
        INSERT INTO sets (
            name, rounds, rest_time, workout_id
        ) VALUES (
            ${name}, ${rounds}, ${rest_time}, ${workout_id}
        )
`;

const insertExercise = (name, description, duration, set_id) => sql.unsafe`
        INSERT INTO exercises (
            name, description, duration, set_id
        ) VALUES (
            ${name}, ${description}, ${duration}, ${set_id}
        )
`;

module.exports = {
  inserWorkout,
  insertSet,
  insertExercise,
};
