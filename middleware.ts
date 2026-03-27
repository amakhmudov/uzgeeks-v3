import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allow static files
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static assets
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // Basic Auth credentials from environment variables
  const USERNAME = process.env.BASIC_AUTH_USER;
  const PASSWORD = process.env.BASIC_AUTH_PASS;

  // Check Authorization header
  const auth = request.headers.get("authorization");
  if (!auth) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    });
  }

  // Decode header
  const [scheme, encoded] = auth.split(" ");
  if (scheme !== "Basic" || !encoded) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const decoded = Buffer.from(encoded, "base64").toString(); // "username:password"
  const [user, pass] = decoded.split(":");

  if (user === USERNAME && pass === PASSWORD) {
    return NextResponse.next();
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
  });
}

export const config = {
  matcher: "/:path*",
};
