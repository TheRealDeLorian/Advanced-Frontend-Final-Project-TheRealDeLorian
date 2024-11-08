import axios from "axios";

const baseUrl = "http://localhost:5083";



export const callAuthApiEndpoint = async (id_token: string) => {
  try {
    const url = baseUrl + "/authOnly";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    })
    console.log("data from auth" + response.data);
    return response.data;

  } catch {
    console.log('didnt work');
  }
}


export const callPublicApiEndpoint = async () => {
  try {
    const url = baseUrl + "/public";
    const response = await axios.get(url)
    console.log("data from public" + response.data);
    return response.data;

  } catch {
    console.log('didnt work');
  }
}