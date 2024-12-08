import { visitService } from "../services/visitService";
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";
import  { Visit } from "../data/Visit";

export const visitKeys = {
  visitsKey: ["visitsKey"] as const,
  visitKey: (id?: string) => ["visitKey", id] as const,
};

export const useGetVisitsByUserIdQuery = (userId: number) => {
  return useQuery({
    queryKey: visitKeys.visitsKey,
    queryFn: async () => await visitService.getVisitsByUserId(userId),
    refetchInterval: 30000,
  });
};

export const useCreateVisitMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newVisit: Visit) =>
      await visitService.addNewVisit(newVisit),
    
    onSuccess: () => {
      queryClient.invalidateQueries(visitKeys.visitsKey);
    },
  });
};



