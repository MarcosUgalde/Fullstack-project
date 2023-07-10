import axios from "axios";
import { register, signin } from "./auth";
import { info } from "./user";
import { createWorkout } from "./workouts";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const auth = {
  register: register(client),
  signin: signin(client),
};

const user = {
  info: info(client),
};

const workout = {
  create: createWorkout(client),
};

export { auth, user, workout };
