const mongoose = require("mongoose");
const config = require("../keys");
const dbPath = config.MONGO_URI;
const chalk = require("chalk");

mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log(chalk.green("> Successfully connected to the database"));
  })
  .catch(err => {
    console.log(chalk.red(err.message));
  });

const db = mongoose.connection;

db.on("error", () => {
  console.log(chalk.red("> Error occurred from the database"));
});

db.once("open", () => {
  console.log(chalk.green("> Successfully accessed the database"));
});

module.exports = mongoose;
