import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const privateServerAPI = axios.create({ baseURL: "http://localhost:3001/" });

privateServerAPI.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const token = cookieStore?.get("accessToken")?.value || "invalid";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

privateServerAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const cookieStore = await cookies();
      const refreshToken = cookieStore?.get("refreshToken")?.value;

      if (refreshToken) {
        try {
          const { data } = await axios.post(
            "http://localhost:3001/api/auth/refresh",
            { refreshToken },
          );

          // নতুন access token কুকিতে সেট করো
          const response = NextResponse.next();
          response.cookies.set("accessToken", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 15, // 15 মিনিট
          });

          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
          return privateServerAPI(originalRequest);
        } catch (err) {
          // refresh ব্যর্থ হলে → কুকি clear করো
          const response = NextResponse.next();
          response.cookies.delete("accessToken");
          response.cookies.delete("refreshToken");
          throw new Error("Unauthorized: refresh failed");
        }
      } else {
        // refresh token নেই → কুকি clear করো
        const response = NextResponse.next();
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        throw new Error("Unauthorized: no refresh token");
      }
    }

    return Promise.reject(error);
  },
);

export default privateServerAPI;
