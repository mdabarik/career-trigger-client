"use client";

import { useMemo, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { tokenService } from "./utils";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const token = tokenService.getAccessToken();

  const [user, setUser] = useState(() => {
    if (!token) return null;
    try {
      return jwtDecode(token);
    } catch {
      tokenService.clearAllTokens();
      return null;
    }
  });

  const memoizedUser = useMemo(() => user, [user]);

  const logout = useCallback(() => {
    tokenService.clearAllTokens();
    setUser(null);
    router.refresh();
  }, [router]);

  return { user: memoizedUser, logout };
};
