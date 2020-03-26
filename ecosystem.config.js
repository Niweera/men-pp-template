module.exports = {
  apps: [
    {
      name: "men-pp-template",
      script: "./index.js",
      watch: true,
      args: ["--color"],
      instances: 1,
      exec_mode: "cluster",
      env: {
        HTTP_PORT: 8080,
        NODE_ENV: "development",
        MONGO_URI: `mongodb://localhost:27017/sample-db`,
        JWT_SECRET: "supersecret",
        BCRYPT_ROUNDS: 10,
        VERIFY_ALGORITHM: ["HS256"],
        TOKEN_ISSUER: "server",
        JWT_EXPIRES_IN: "1h",
        SIGN_ALGORITHM: "HS256"
      }
    }
  ]
};
