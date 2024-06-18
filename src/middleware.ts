import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // console.log("the nexturl pathname ", req.nextUrl.pathname);
    // console.log("token info : ", req.nextauth.token);

    if (
      req.nextUrl.pathname.startsWith("/root") &&
      req.nextauth.token?.role !== "ROOT"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
    if (req.nextauth.token?.role === "ROOT")
      return NextResponse.redirect(`${process.env.BASE_URL}/root`);
    // if (
    //   req.nextUrl.pathname.startsWith("/admin") &&
    //   req.nextauth.token?.role !== "ADMIN" &&
    //   req.nextauth.token?.role !== "ROOT"
    // ) {
    //   return NextResponse.rewrite(new URL("/denied", req.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/root"],
};
