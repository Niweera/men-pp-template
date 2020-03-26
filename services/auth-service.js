const { User } = require("../models");
const jwt = require("jsonwebtoken");
const PasswordHasher = require("./password-hasher");
const config = require("../keys");

module.exports = class AuthService {
  constructor() {
    this.passwordHasher = new PasswordHasher();
  }

  async signIn({ username, password }) {
    let user = await User.findOne({ username });
    if (!user) {
      return null;
    }
    if ((await this.passwordHasher.check(password, user.password)) === true) {
      return this.generateAccessToken(user);
    } else {
      return null;
    }
  }

  async signUp({ username, password }) {
    password = await this.passwordHasher.hash(password);
    const new_name = new User({ username, password });
    let response = await new_name.save();
    response = response.toJSON();
    delete response.password;
    delete response._id;
    delete response.__v;
    let payload = {
      user: response.username
    };
    return jwt.sign(payload, config.JWT_SECRET, {
      algorithm: config.SIGN_ALGORITHM,
      issuer: config.TOKEN_ISSUER,
      subject: `${response.username}`,
      expiresIn: config.JWT_EXPIRES_IN
    });
  }

  generateAccessToken(user) {
    if (!user) {
      throw new Error("Invalid user");
    }
    let userInfo = user.toJSON();
    delete userInfo.__v;
    delete userInfo.password;
    let payload = {
      user: userInfo.username
    };
    return jwt.sign(payload, config.JWT_SECRET, {
      algorithm: config.SIGN_ALGORITHM,
      issuer: config.TOKEN_ISSUER,
      subject: `${user.username}`,
      expiresIn: config.JWT_EXPIRES_IN
    });
  }
};
