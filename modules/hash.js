import crypto from 'crypto';
export function getCognitoSecretHash(email) {
    const hmac = crypto.createHmac('sha256', process.env.AWS_COGNITO_CLIENT_ID);
    hmac.update(email + process.env.AWS_COGNITO_CLIENT_SECRET);
    return hmac.digest('base64');
}