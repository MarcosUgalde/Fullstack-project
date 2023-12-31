import axios from "axios";
import { logout, register, signin } from "./auth";
import { info } from "./user";
import {
  createSet,
  createWorkout,
  createExercise,
  selectWorkouts,
  selectOneWorkout,
  deleteWorkout,
} from "./workouts";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
  logout: logout(client),
};

const user = {
  info: info(client),
};

const workout = {
  create: createWorkout(client),
  addset: createSet(client),
  addexercise: createExercise(client),
  getWorkouts: selectWorkouts(client),
  getOneWorkout: selectOneWorkout(client),
  deleteWorkout: deleteWorkout(client),
};

export { auth, user, workout };
