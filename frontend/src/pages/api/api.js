import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

const api = axios.create({
  baseURL: `https://backend-ficha-rpg-pedro.fly.dev/`,
  // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export { api };
