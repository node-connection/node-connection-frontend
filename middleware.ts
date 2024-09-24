import { NextRequest, NextResponse } from "next/server";
import getSessionToken from "./app/_utils/getSessionToken";

const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const sessionToken = await getSessionToken();

  if (
    !sessionToken &&
    !pathname.endsWith("/") &&
    !pathname.endsWith("/join") &&
    !pathname.endsWith("/login")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
};

export default middleware;

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
