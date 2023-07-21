import { useQueryClient, useMutation } from "react-query";
import { workout } from "../services";

export const useDelete = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((name) => workout.deleteWorkout(name), {
    onSuccess: () => {
      queryClient.invalidateQueries("workouts");
    },
  });

  const deleteWorkout = (name) => {
    deleteMutation.mutate(name);
  };

  return {
    deleteWorkout,
  };
};
