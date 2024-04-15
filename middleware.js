import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import useCrypto from "./services/utilities/cryptoJs";

const cryptoService = new useCrypto();
export function middleware(request = NextRequest, response = NextResponse) {
  var tokenRaw = request.cookies.get("GEDT");

  if (tokenRaw == undefined || tokenRaw == null || tokenRaw == "") {
    // if (request.nextUrl.pathname == "/") {
    // return NextResponse.redirect(new URL("/", request.url));
    // } else
    if (request.nextUrl.pathname == "/user") {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  } else {
    var token = JSON.parse(cryptoService.decrypt(tokenRaw.value)).token;

    if (
      (token == null || token == undefined || token == "") &&
      (request.nextUrl.pathname == "/" || request.nextUrl.pathname == "/admin")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (
      request.nextUrl.pathname == "/login" &&
      request.nextUrl.pathname == "/user"
    ) {
      return NextResponse.redirect(new URL("/user", request.url));
    }
    if (
      request.nextUrl.pathname == "/login" &&
      request.nextUrl.pathname == "/admin"
    ) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
}
