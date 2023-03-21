import cognitoClient from '../../../modules/cognito';
import { getCognitoSecretHash } from '../../../modules/hash';
export default function handler({ body, method}, res){
    if (method !== 'POST') {
      return res.status(404).json({ message: 'Not implemented' });
    }
    const { name, email, birthDate, password } = body;
    if(!email || !email || !birthDate || !password ){
      return res.status(401).json({ message: 'Email, name, password and birthDate are required' });
    }
   
    var params = {
        ClientId: process.env.AWS_COGNITO_CLIENT_ID,
        Username: email,
        Password: password,
        SecretHash: getCognitoSecretHash(email),
        UserAttributes: [
          {
            Name: "email",
            Value: email
          },
          {
            Name: "name",
            Value: name
          },
          {
            Name: "birthdate",
            // Value: '1679079600',
            Value: birthDate,
          },
          {
            Name: "updated_at",
            Value: Date.now().toString(),
          },
          {
            Name: "zoneinfo",
            Value: 'something',
          },
          {
            Name: "picture",
            Value: 'https://especiais.g1.globo.com/educacao/guia-de-carreiras/teste-vocacional/assets/logo.png',
          },
        ]
    };
    cognitoClient.signUp(params, (error, data) => {
      if(error){
        return res.status(200).json({ success: false, error: error.message });
      }
      res.status(200).json({ success: true, message: 'Account created, please confirm the email' });
    });
    return <>Teste</>;
}
