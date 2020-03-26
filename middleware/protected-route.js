const passport = require("passport");

module.exports = function ProtectedRoute() {
  return passport.authenticate("jwt", { session: false });
};
