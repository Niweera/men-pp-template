const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const CommonMiddleware = app => {
  app.use(bodyParser.json());
  app.use(morgan("dev"));
  app.use(cors());
  app.use(helmet());
};

const Middleware = app => {
  CommonMiddleware(app);
};

module.exports = Middleware;
