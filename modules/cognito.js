import AWS from 'aws-sdk';
const cognitoClient = new AWS.CognitoIdentityServiceProvider({
    region: "us-east-2",
});
export default cognitoClient;