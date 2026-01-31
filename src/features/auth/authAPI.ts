import axios from "axios";

export const loginApi = (payload: { email: string; password: string }) =>
  axios.post("/auth/login", payload);

export const registerApi = (payload: {
  name: string;
  email: string;
  password: string;
}) => axios.post("/auth/register", payload);

export const refreshApi = (refreshToken: string) =>
  axios.post("/auth/refresh", { refreshToken });
