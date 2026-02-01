import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const getUserFromCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value || null;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return payload;
  } catch {
    return null;
  }
};
