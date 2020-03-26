const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10000,
  max: 1, // limit each IP to 100 requests per windowMs
  message: { message: "Too many requests" }
});

module.exports = limiter;
