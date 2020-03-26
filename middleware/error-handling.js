const {
  ValidationError,
  AuthenticationError,
  AccessDeniedError,
  NotFoundError
} = require("../errors");
const chalk = require("chalk");

const errorLogger = (err, req, res, next) => {
  if (err.message) {
    console.log(err);
  }
  if (err.stack) {
    console.log(chalk.red(err.message));
  }
  next(err);
};

const authenticationErrorHandler = (err, req, res, next) => {
  if (err instanceof AuthenticationError) {
    return res.status(401).send({ message: err.message });
  }
  next(err);
};

const validationErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).send({ message: err.message });
  }
  next(err);
};

const accessDeniedErrorHandler = (err, req, res, next) => {
  if (err instanceof AccessDeniedError) {
    return res.status(403).send({ message: err.message });
  }
  next(err);
};

const notFoundErrorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(404).send({ message: err.message });
  }
  next(err);
};

const genericErrorHandler = (err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
};

const ErrorHandlingMiddleware = app => {
  app.use([
    errorLogger,
    authenticationErrorHandler,
    validationErrorHandler,
    accessDeniedErrorHandler,
    notFoundErrorHandler,
    genericErrorHandler
  ]);
};

module.exports = ErrorHandlingMiddleware;
