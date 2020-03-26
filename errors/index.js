const AccessDeniedError = class AccessDeniedError {
  constructor(message) {
    this.message = message;
  }
};

const AuthenticationError = class AuthenticationError {
  constructor(message) {
    this.message = message;
  }
};

const NotFoundError = class NotFoundError {
  constructor(message) {
    this.message = message;
  }
};

const ValidationError = class ValidationError {
  constructor(message) {
    this.message = message;
  }
};

module.exports = {
  AccessDeniedError,
  AuthenticationError,
  ValidationError,
  NotFoundError
};
