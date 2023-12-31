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

const selectWorkouts = (client) => () => {
  return client
    .get("http://localhost:4000/workouts/all")
    .then((res) => res.data)
    .catch((err) => err);
};

const selectOneWorkout = (client) => (url) => {
  return client
    .get(`http://localhost:4000/workouts/${url}`)
    .then((res) => res.data)
    .catch((err) => err);
};

const deleteWorkout = (client) => (name) => {
  return client
    .delete(`http://localhost:4000/workouts/${name}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export {
  createWorkout,
  createSet,
  createExercise,
  selectWorkouts,
  selectOneWorkout,
  deleteWorkout,
};
