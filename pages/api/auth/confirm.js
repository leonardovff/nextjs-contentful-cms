import cognitoClient from '../../../modules/cognito';
import { getCognitoSecretHash } from '../../../modules/hash';

export default async function handler({ method, body }, res){
  if (method !== 'POST') {
    return res.status(404).json({ message: 'Not implemented' });
  }
  const { email, code } = body;
  if(!email || !code){
    return res.status(401).json({ message: 'Email and code are required' });
  }
  var params = {
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
    Username: email,
    ConfirmationCode: code,
    SecretHash: getCognitoSecretHash(email),
  };
  cognitoClient.confirmSignUp(params, (error) => {
    if(error){
      return res.status(200).json({ success: false, error: error.message });
    }
    res.status(200).json({ success: true });
  });
}