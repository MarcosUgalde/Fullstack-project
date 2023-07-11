const createWorkout =
  (client) =>
  ({ payload }) => {
    return client
      .post("http://localhost:4000/workouts/create", payload)
      .then((res) => res.data);
  };

const createSet =
  (client) =>
  ({ payload }) => {
    return client
      .post("http://localhost:4000/workouts/newset", payload)
      .then((res) => res.data);
  };

const createExercise =
  (client) =>
  ({ payload }) => {
    return client
      .post("http://localhost:4000/workouts/newexercise", payload)
      .then((res) => res.data);
  };

export { createWorkout, createSet, createExercise };
