import axios from "axios";
import { tokenService } from "@/features/auth/utils";

const api = axios.create({ baseURL: "http://localhost:3001/" });

// Attach access token to every request
api.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors and refresh token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenService.getRefreshToken();
      if (refreshToken) {
        try {
          // Call your refresh endpoint
          const { data } = await axios.post(
            "http://localhost:3001/api/auth/refresh",
            {
              refreshToken,
            },
          );

          // Save new access token
          tokenService.setAccessToken(data.accessToken);

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return api(originalRequest);
        } catch (err) {
          // Refresh failed → clear tokens and redirect
          tokenService.clearAllTokens();
          window.location.href = "/login";
        }
      } else {
        tokenService.clearAllTokens();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
