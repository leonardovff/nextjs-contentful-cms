import crypto from 'crypto';
export function getCognitoSecretHash(email) {
    const hmac = crypto.createHmac('sha256', process.env.AWS_CLIENT_SECRET);
    hmac.update(email + process.env.AWS_CLIENT_ID);
    return hmac.digest('base64');
}