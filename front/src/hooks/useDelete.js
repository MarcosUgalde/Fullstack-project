import { useQuery } from "react-query";
import { workout } from "../services";

export const useDelete = (name) => {
  const { data } = useQuery(name, () => workout.deleteWorkout(name));

  return data;
};
