import dotenv from 'dotenv';
dotenv.config();


export const {
    DATABASE_URI = process.env.DATABASE_URI,
    PORT = process.env.PORT,
} = process.env;


// require('crypto').randomBytes(64).toString('hex')
