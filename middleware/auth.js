const config = require("../keys");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractStrategy = require("passport-jwt").ExtractJwt;

module.exports = function AuthMiddleware(app) {
  const authStrategy = new JwtStrategy(
    {
      secretOrKey: config.JWT_SECRET,
      algorithms: config.VERIFY_ALGORITHM,
      issuer: config.TOKEN_ISSUER,
      ignoreExpiration: false,
      jwtFromRequest: ExtractStrategy.fromAuthHeaderWithScheme("Bearer") //Authorization: Bearer <TOKEN>
    },
    async (payload, done) => {
      const username = payload.sub;
      const userData = true; //implement logic to check for the username to exist or not
      if (userData) {
        done(null, username, payload);
      } else {
        done(null, false);
      }
    }
  );

  passport.use(authStrategy);
  app.use(passport.initialize());
};
