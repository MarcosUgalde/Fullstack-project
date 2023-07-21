import { useMutation, useQueryClient } from "react-query";
import { auth } from "../services";

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: auth.logout,
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });

  return mutate;
};
