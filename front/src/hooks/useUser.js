import { useQuery } from "react-query";
import { user } from "../services";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    querykey: ["user"],
    queryFn: user.info,
  });

  return { data, isLoading };
};
