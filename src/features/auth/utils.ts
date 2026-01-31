import Cookies from "js-cookie";

class TokenService {
  setAccessToken(token: string) {
    Cookies.set("accessToken", token, {
      secure: true,
      sameSite: "strict",
      expires: 15 * 60 * 1000, // 15 min
    });
  }

  getAccessToken(): string | undefined {
    return Cookies.get("accessToken");
  }

  clearAccessToken() {
    Cookies.remove("accessToken");
  }

  setRefreshToken(token: string) {
    Cookies.set("refreshToken", token, {
      secure: true,
      sameSite: "strict",
      expires: 7 * 24 * 60 * 60 * 1000, // 7 din
    });
  }

  getRefreshToken(): string | undefined {
    return Cookies.get("refreshToken");
  }

  clearRefreshToken() {
    Cookies.remove("refreshToken");
  }

  clearAllTokens() {
    this.clearAccessToken();
    this.clearRefreshToken();
  }
}

export const tokenService = new TokenService();
