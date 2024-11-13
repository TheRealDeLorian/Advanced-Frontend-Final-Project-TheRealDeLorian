import { templeService } from "../services/templeService";
import { useQuery } from "react-query";

export const templeKeys = {
  templesKey: ["templesKey"] as const,
  templeKey: (id?: string) => ["templeKey", id] as const,
};

export const useGetAllTemplesQuery = () => {
  return useQuery({
    queryKey: templeKeys.templesKey,
    queryFn: async () => await templeService.getAllTemples(),
    refetchInterval: 30000,
  });
};
