


import axios from "axios";

// ✅ Base URL should point to API root, not a specific endpoint
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth",
});

export default api;