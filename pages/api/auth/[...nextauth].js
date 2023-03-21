import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.AWS_COGNITO_CLIENT_ID,
      clientSecret: process.env.AWS_COGNITO_CLIENT_SECRET,
      issuer: process.env.AWS_COGNITO_ISSUER,
    }),
  ],
}
export default async function auth(req, res) {
  return await NextAuth(req, res, authOptions);
};