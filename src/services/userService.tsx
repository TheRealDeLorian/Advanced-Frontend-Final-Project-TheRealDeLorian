import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL + "/api";

export const userService = {

  getUserIdByEmail: async (email: string): Promise<number> => {
    try {
      const url = baseUrl + `/User/${email}`;
      const response = await axios.get(url);
      console.log("user id: ", response.data);
      return response.data;
    } catch (error) {
      console.log('Failed to fetch user id:', error);
      throw error;
    }
  }
} 