const express = require("express");
const ErrorHandlingMiddleware = require("./middleware/error-handling");
const AuthenticationMiddleware = require("./middleware/auth");
const config = require("./keys");
const chalk = require("chalk");

const PORT = config.HTTP_PORT;

const app = express();
const Middleware = require("./middleware");

const Controller = require("./controllers");

Middleware(app);
AuthenticationMiddleware(app);
app.use("", Controller);
ErrorHandlingMiddleware(app);

app.listen(PORT, () => {
  console.log(chalk.blue(`Sever listening on port ${PORT}`));
});

module.exports = app;
