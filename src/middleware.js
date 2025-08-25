import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {

  const token = await getToken({ req });

  //   if(token)
  //   {
  //     console.log("Middleware",token);
  //   }

  //   const isTokenOK = Boolean(token);
  const isUser = token?.role == "user";

  const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (isAdminSpecificRoute && !isUser) {
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
};
