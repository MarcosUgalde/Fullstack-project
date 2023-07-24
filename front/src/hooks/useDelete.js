import { useQueryClient, useMutation } from "react-query";
import { useLocation } from "wouter";
import { workout } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const deleteMutation = useMutation((name) => workout.deleteWorkout(name), {
    onSuccess: () => {
      queryClient.invalidateQueries("workouts") && setLocation("/");
    },
  });

  const deleteWorkout = (name) => {
    deleteMutation.mutate(name);
  };

  return {
    deleteWorkout,
  };
};
