import Cookies from "js-cookie";
import { createRemoteJWKSet, jwtVerify, JWTVerifyResult } from "jose";
import { People } from "../data/People";

export async function getUserFromCookie() {
  const authToken = Cookies.get("jwt_token");
  
  if (authToken) {
    const JWKS = createRemoteJWKSet(
      new URL('https://auth.snowse.duckdns.org/realms/dorian-final/protocol/openid-connect/certs')
    );
    try {

      const { payload }: JWTVerifyResult = await jwtVerify(
        authToken,
        JWKS,
        {
          issuer: "https://auth.snowse.duckdns.org/realms/dorian-final",
          audience: "dorian-demo2",
        }
      );

      const myUser: People = {
        id: payload.Id as number ?? "",
        fname: payload.given_name as string ?? "",
        lname: payload.family_name as string ?? "",
        email: payload.email as string ?? "",
        pfpurl: payload.pfpUrl as string ?? ""
      }
      return myUser;
    }
    catch(error) {
      console.log(error)
      return undefined;
    }
  }
}