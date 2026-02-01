import Cookies from "js-cookie";

class TokenService {
  setAccessToken(token: string) {
    Cookies.set("accessToken", token, {
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      path: "/",
      expires: 1 / 96,
    });
  }

  getAccessToken(): string | undefined {
    return Cookies.get("accessToken");
  }

  clearAccessToken() {
    Cookies.remove("accessToken", { path: "/" });
  }

  setRefreshToken(token: string) {
    Cookies.set("refreshToken", token, {
      secure: window.location.protocol === "https:",
      sameSite: "strict",
      path: "/",
      expires: 7,
    });
  }

  getRefreshToken(): string | undefined {
    return Cookies.get("refreshToken");
  }

  clearRefreshToken() {
    Cookies.remove("refreshToken", { path: "/" });
  }

  clearAllTokens() {
    this.clearAccessToken();
    this.clearRefreshToken();
  }
}

export const tokenService = new TokenService();
