import { useEffect, useState } from "react";
import { tokenService } from "@/features/auth/utils";
import jwt from "jsonwebtoken";

export const useUser = () => {
  const [user] = useState(() => {
    const token = tokenService.getAccessToken();
    if (!token) return null;

    try {
      return jwt.decode(token);
    } catch {
      return null;
    }
  });

  // console.log(user, "useUser()");

  return user;
};
