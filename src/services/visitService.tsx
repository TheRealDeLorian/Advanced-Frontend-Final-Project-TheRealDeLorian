import axios from "axios";
import { Visit } from "../data/Visit";

const baseUrl = import.meta.env.VITE_API_URL + "/api";


export const visitService = {

  getAllVisitsByUserId: async (id: number): Promise<Visit[]> => {
    try {
      const url = baseUrl + `/visits/${id}`;
      const response = await axios.get(url);
      console.log("visits: ", response.data);
      return response.data;
    } catch (error) {
      console.log('Failed to fetch visits:', error);
      throw error;
    }
  },

  addNewVisit: async (visit: Visit): Promise<Visit> => {
    try {
      const url = baseUrl + `/visits`;
      const response = await axios.post(url, visit); 
      console.log('Visit added:', response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to add new visit:', error);
      throw error;
    }
  },
} 