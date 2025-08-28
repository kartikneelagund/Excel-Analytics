// src/utils/api.js
import axios from "axios";

// Base URL: use environment variable if available, otherwise fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add a request interceptor to automatically attach JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
