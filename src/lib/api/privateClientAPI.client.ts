import { tokenService } from "@/features/auth/utils";
import axios from "axios";

const clientPrivateAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

clientPrivateAPI.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

clientPrivateAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config, response } = error;
    if (response.status !== 401 || config._retry) {
      return Promise.reject(error);
    }
    config._retry = true;
    try {
      const refreshToken = tokenService.getRefreshToken();
      if (!refreshToken) {
        throw new Error("Invalid refresh token");
      }
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
        { refreshToken },
      );
      tokenService.setAccessToken(data.accessToken);
      config.headers.Authorization = `Berear ${data?.accessToken}`;
      clientPrivateAPI(config);
    } catch (err) {
      tokenService.clearAllTokens();
      window.location.href = "/login";
      console.log(err);
    }
  },
);

export default clientPrivateAPI;
