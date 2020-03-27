![Open Source Love](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg)
![GitHub](https://img.shields.io/github/license/Niweera/men-pp-template.svg)

# men-pp-template

MongoDB, Express, NodeJS template with Passport authentication.

# How to use

1.  Clone repo
2.  `npm i`
3.  `npm i -g pm2`
4.  Remeber to change config in `ecosystem.config.js`.
5.  `pm2 start`
6.  To view logs: `pm2 logs`

## ecosystem.config.js file

```javascript
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
```

# How to edit

| File                    | Functionality                                            |
| :---------------------- | :------------------------------------------------------- |
| `/controllers/index.js` | To add API endpoints                                     |
| `/middleware/index.js`  | To add middlewares to the Express app                    |
| `/models/index.js`      | To add Mongoose schemas and @Hapi/Joi validation schemas |
| `/services/index.js`    | To add functions to the controllers                      |
| `/keys/index.js`        | To add ENV variables                                     |

# API endpoints

| Method | Endpoint     | Description                              | Examples                                                                                                                                   |
| :----- | :----------- | :--------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/`          | Welcome message                          | [`http:localhost:8080/`](http:localhost:8080/)                                                                                             |
| `GET`  | `/usernames` | Get all usernames (needs authentication) | [`http:localhost:8080//usernames`](http:localhost:8080/usernames)                                                                          |
| `POST` | `/sign-up`   | Sign up                                  | [`http:localhost:8080//sign-up`](http:localhost:8080/sign-up) <br> Body parameters: <br> `{"username" : "Niweera", "password" : "secret"}` |
| `POST` | `/sign-in`   | Sign in                                  | [`http:localhost:8080//sign-in`](http:localhost:8080/sign-in) <br> Body parameters: <br> `{"username" : "Niweera", "password" : "secret"}` |

# Resources:

1. [PM2 Docs](https://pm2.keymetrics.io/docs/usage/quick-start/)
2. [Mongoose Docs](https://mongoosejs.com/docs/index.html)
3. [Passport Docs](http://www.passportjs.org/docs/downloads/html/)
4. [Joi Docs](https://hapi.dev/module/joi/)
5. [jsonwebtoken Docs](https://github.com/auth0/node-jsonwebtoken/blob/master/README.md)

### PRs are welcome
