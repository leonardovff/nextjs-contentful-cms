import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"
import cognitoClient from "../../../modules/cognito";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
      clientId: process.env.AWS_COGNITO_CLIENT_ID,
      clientSecret: process.env.AWS_COGNITO_CLIENT_SECRET,
      issuer: process.env.AWS_COGNITO_ISSUER,
      profile: (profile) => ({
        id: profile.sub,
        name: profile.name,
        email: profile.email,
        image: null,
      }),
    }),
  ],
  pages: {
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // callbacks: {
  //   signIn: async (user, account, profile) => {
  //     try {
  //       const { email, password } = user;
  //       const result = await cognitoClient
  //         .initiateAuth({
  //           AuthFlow: "USER_PASSWORD_AUTH",
  //           ClientId: process.env.AWS_COGNITO_CLIENT_ID,
  //           UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  //           AuthParameters: {
  //             USERNAME: email,
  //             PASSWORD: password,
  //           },
  //         })
  //         .promise();
  //       const idToken = result.AuthenticationResult.IdToken;
  //       const accessToken = result.AuthenticationResult.AccessToken;
  //       return Promise.resolve({
  //         ...user,
  //         idToken,
  //         accessToken,
  //       });
  //     } catch (error) {
  //       console.error(error);
  //       return Promise.reject("/subjects/?error=SignInError");
  //     }
  //   },
  // },
}
export default async function auth(req, res) {
  return await NextAuth(req, res, authOptions);
};