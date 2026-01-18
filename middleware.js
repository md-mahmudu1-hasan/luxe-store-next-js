import { NextResponse } from "next/server";

export function middleware(request) {
  const authToken = request.cookies.get("auth_token");
  const { pathname } = request.nextUrl;

  // Protect /add-item route
  if (pathname.startsWith("/add-item")) {
    if (!authToken) {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item/:path*"],
};
