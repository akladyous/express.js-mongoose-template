import dotenv from 'dotenv';
dotenv.config();

const accessTimeout = 60 * 1;
const refreshTimeout = 60 * 60 * 24;
const cookieTimeout = 1 * 24 * 60 * 60 * 1000;
export const {
    PORT = process.env.PORT,
    ISSUER_BASE_URL = process.env.ISSUER_BASE_URL,
    CLIENT_ID = process.env.CLIENT_ID,
    BASE_URL = process.env.BASE_URL,
    SECRET = process.env.SECRET
} = process.env;

// require('crypto').randomBytes(64).toString('hex')
