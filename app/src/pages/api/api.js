import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const api = axios.create({
  // baseURL: `http://localhost:3030/api/v1`,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export { api };
