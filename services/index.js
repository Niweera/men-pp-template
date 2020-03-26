const { User } = require("../models");

module.exports = class Service {
  async getNames() {
    return User.find({}).select("-password -_id -__v");
  }

  getWelcome() {
    return { message: "Hello World!" };
  }
};
