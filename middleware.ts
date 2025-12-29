import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next internals + files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already localized -> allow
  if (pathname === "/en" || pathname.startsWith("/en/")) return NextResponse.next();
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return NextResponse.next();

  // Redirect "/" -> "/en"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // Any non-localized route -> prefix with "/en"
  // e.g. "/bullion" -> "/en/bullion"
  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
