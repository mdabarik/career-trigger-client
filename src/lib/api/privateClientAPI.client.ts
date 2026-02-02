import axios from "axios";
import { tokenService } from "@/features/auth/utils";

const privateClientAPI = axios.create({ baseURL: "http://localhost:3001/" });

privateClientAPI.interceptors.request.use((config) => {
  let token = tokenService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

privateClientAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenService.getRefreshToken();
      if (refreshToken) {
        try {
          const { data } = await axios.post(
            "http://localhost:3001/api/auth/refresh",
            { refreshToken },
          );

          tokenService.setAccessToken(data.accessToken);
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return privateClientAPI(originalRequest);
        } catch (err) {
          tokenService.clearAllTokens();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
      } else {
        tokenService.clearAllTokens();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error);
  },
);

export default privateClientAPI;
