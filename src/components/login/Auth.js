import axios from "axios";

const BASE_URL = "http://localhost:3000"; // or whatever your API endpoint is

const Auth = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      // redirect to home page or dashboard
    } catch (error) {
      console.error(error);
    }
  },
  signup: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      // redirect to home page or dashboard
    } catch (error) {
      console.error(error);
    }
  },
  resetPassword: async (email) => {
    try {
      await axios.post(`${BASE_URL}/forgot-password`, { email });
      // show success message
    } catch (error) {
      console.error(error);
    }
  },
};

