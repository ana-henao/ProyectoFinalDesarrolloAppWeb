const TOKEN_SECRET = process.env.SECRET;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;
const TOKEN_MAX_AGE = "1m";

export {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  TOKEN_SECRET,
  TOKEN_MAX_AGE,
};
