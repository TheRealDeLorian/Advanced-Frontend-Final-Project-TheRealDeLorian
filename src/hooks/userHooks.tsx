import { useQuery } from "react-query";
import { userService } from "../services/userService";

export const userKeys = {
  usersKey: ["usersKey"] as const,
  userKey: (id?: string) => ["userKey", id] as const,
};

export const useGetIdByEmailQuery = (email: string) => {
  return useQuery({
    queryKey: userKeys.usersKey,
    queryFn: async () => await userService.getUserIdByEmail(email),
    refetchInterval: 30000,
  });
};
