import axios from "axios";

const API_BASE_URL = "http://localhost:3000/auth";
console.log("URL", API_BASE_URL);

class LoginService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(username, password) {
    try {
      const response = await this.apiClient.post("/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      //   console.error("API Error:", error);
      throw error.response ? error.response.data : error.message;
    }
  }
}

export default new LoginService();
