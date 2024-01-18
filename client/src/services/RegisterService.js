import axios from "axios";

const API_BASE_URL = "http://localhost:3000/auth";
console.log("URL", API_BASE_URL);

class RegisterService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async register(username, phoneNumber, password) {
    try {
      const response = await this.apiClient.post("/register", {
        username,
        phoneNumber,
        password,
      });
      return response.data;
    } catch (error) {
      //   console.error("API Error:", error);
      throw error.response ? error.response.data : error.message;
    }
  }
}

export default new RegisterService();
