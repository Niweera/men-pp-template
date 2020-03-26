const bcrypt = require("bcryptjs");
const config = require("../keys");

module.exports = class PasswordHasher {
  constructor() {
    this.rounds = parseInt(config.BCRYPT_ROUNDS);
  }

  async hash(password) {
    return await bcrypt.hash(password, this.rounds);
  }

  async check(password, hash) {
    return await bcrypt.compare(password, hash);
  }
};
