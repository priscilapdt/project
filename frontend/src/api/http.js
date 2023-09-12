import axiosProvider from "axios";

export const axios = axiosProvider.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
