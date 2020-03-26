module.exports = {
  HTTP_PORT: process.env.HTTP_PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS,
  VERIFY_ALGORITHM: process.env.VERIFY_ALGORITHM,
  TOKEN_ISSUER: process.env.TOKEN_ISSUER,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  SIGN_ALGORITHM: process.env.SIGN_ALGORITHM
};
