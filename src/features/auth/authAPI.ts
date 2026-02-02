import privateClientAPI from "@/lib/api/privateClientAPI.client";

export const loginApi = (payload: { email: string; password: string }) =>
  privateClientAPI.post("/api/auth/login", payload);

export const registerApi = (payload: {
  name: string;
  email: string;
  password: string;
}) => privateClientAPI.post("/api/auth/register", payload);

export const refreshApi = (refreshToken: string) =>
  privateClientAPI.post("/api/auth/refresh", { refreshToken });
