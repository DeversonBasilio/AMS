import * as dotenv from 'dotenv';
import * as path from 'path';
const env = process.env.NODE_ENV || 'dev';
const envFile = path.resolve(process.cwd(), `.env.${env}`);
dotenv.config({ path: envFile });

export default {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: process.env.POSTGRES_DIALECT,
};
