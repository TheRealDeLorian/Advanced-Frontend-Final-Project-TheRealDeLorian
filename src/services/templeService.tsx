import axios from "axios";
import { Temple } from "../data/Temple";

const baseUrl = import.meta.env.VITE_API_URL + "/api";


export const templeService = {

  getAllTemples: async (): Promise<Temple[]> => {
    try {
      const url = baseUrl + "/Temple";
      const response = await axios.get(url);
      console.log("temples: ", response.data);
      return response.data;
    } catch (error) {
      console.log('Failed to fetch temples:', error);
      throw error;
    }
  }
} 