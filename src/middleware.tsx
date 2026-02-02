import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserFromCookie } from "./lib/auth.server";

import { jwtVerify } from "jose";
async function verifyToken(token: string) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (e) {
    return null;
  }
}

const authRoutes = ["/login", "/register"];
const privateRootPaths = ["/dashboard", "/quizes"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  let user = null;
  if (token) {
    user = await verifyToken(token);
  }
  const url = request.nextUrl.clone();

  const isAuthRoute = authRoutes.some((route) => pathname === route);
  const isPrivateRoute = privateRootPaths.some((route) =>
    pathname.startsWith(route),
  );

  if (token && isAuthRoute) {
    const referer =
      request.headers.get("referer") || new URL("/dashboard", request.url);
    return NextResponse.redirect(new URL(referer, request.url));
  }

  if (!token && isPrivateRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (url.pathname.startsWith("/dashboard/manage-posts")) {
    if (user?.role !== "editor" && user?.role !== "admin") {
      url.pathname = "/dashboard/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  if (
    url.pathname.startsWith("/dashboard/categories") ||
    url.pathname.startsWith("/dashboard/users")
  ) {
    if (user?.role !== "admin") {
      url.pathname = "/dashboard/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
