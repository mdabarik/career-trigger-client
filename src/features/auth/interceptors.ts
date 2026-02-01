import axios from "axios";
import { refreshApi } from "./authAPI";
import { tokenService } from "./utils";

const api = axios.create({ baseURL: "http://localhost:3001/" });

api.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = tokenService.getRefreshToken();
      if (refreshToken) {
        try {
          const { data } = await refreshApi(refreshToken);
          tokenService.setAccessToken(data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch {
          tokenService.clearAccessToken();
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  },
);

export default api;
