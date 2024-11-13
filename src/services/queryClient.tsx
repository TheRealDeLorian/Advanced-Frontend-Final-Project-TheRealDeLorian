import toast from "react-hot-toast";
import { QueryClient } from "react-query";


//queries implement global error handling, integrated with toasts
const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: (error) => {
          toast.error(`Global Error: ${(error as Error).message}`);
        },
      },
      mutations: {
        onError: (error) => {
          toast.error(`Global Error: ${(error as Error).message}`);
        },
      },
    },
  });
  
export const getQueryClient = () => {
    return queryClient;
}