const createWorkout =
  (client) =>
  ({ payload }) => {
    return client
      .post("http://localhost:4000/workouts/create", payload)
      .then((res) => res.data);
  };

export { createWorkout };
