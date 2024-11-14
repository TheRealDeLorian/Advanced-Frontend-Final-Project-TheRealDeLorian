import axios from "axios";
import { Temple } from "../data/Temple";

const baseUrl = import.meta.env.VITE_API_URL + "/api";


export const templeService = {

  getAllTemples: async (): Promise<Temple[]> => {
    try {
      const url = baseUrl + "/temples";
      const response = await axios.get(url);
      console.log("data from auth: ", response.data);
      return response.data;
    } catch (error) {
      console.log('Failed to fetch temples:', error);
      throw error;
    }
  }
} 