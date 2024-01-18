import axios from "axios";

const BASE_URL = "http://localhost:8090/api/v1";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const signupUser = async (userData) => {
  try {
    console.log({userData});
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    console.log({response});
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
