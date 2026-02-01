import api from "./interceptors";

export const loginApi = (payload: { email: string; password: string }) =>
  api.post("/api/auth/login", payload);

export const registerApi = (payload: {
  name: string;
  email: string;
  password: string;
}) => api.post("/auth/register", payload);

export const refreshApi = (refreshToken: string) =>
  api.post("/auth/refresh", { refreshToken });
