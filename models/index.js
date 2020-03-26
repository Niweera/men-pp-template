const Joi = require("@hapi/joi");
const mongoose = require("../database");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    index: true,
    unique: true
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true
  }
});

const userCollectionName = "users";

const User = mongoose.model(userCollectionName, userSchema, userCollectionName);

const DefaultValidationSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = {
  User,
  DefaultValidationSchema
};
