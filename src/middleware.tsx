import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];

const privateRootPaths = ["/dashboard", "/quizes"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
