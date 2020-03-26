const router = require("express").Router();
const asyncWrapper = require("../utilities/async-wrapper").AsyncWrapper;
const Service = require("../services");
const protectedRoute = require("../middleware/protected-route");
const validator = require("../middleware/validator");
const { AccessDeniedError, AuthenticationError } = require("../errors");
const AuthService = require("../services/auth-service");
const service = new Service();
const authService = new AuthService();

/** @route   GET /
 *  @desc    Get welcome message
 *  @access  Public
 */
router.get(
  "/",
  asyncWrapper(async (req, res) => {
    const response = await service.getWelcome();

    res.send(response);
  })
);

/** @route   POST /sign-in
 *  @desc    Sign In
 *  @access  Public
 */
router.post(
  "/sign-in",
  [validator("Main", "default")],
  asyncWrapper(async (req, res) => {
    let { username, password } = req.body;
    let token = await authService.signIn({ username, password });
    if (!token) {
      throw new AuthenticationError("Invalid credentials");
    } else {
      res.send({
        idToken: token,
        username,
        expiresIn: Math.floor((new Date().getTime() + 3600000) / 1000)
      });
    }
  })
);

/** @route   POST /sign-up
 *  @desc    Register
 *  @access  Public
 */
router.post(
  "/sign-up",
  [validator("Main", "default")],
  asyncWrapper(async (req, res) => {
    let token = await authService.signUp(req.body);
    res.send({
      idToken: token,
      username: req.body.username,
      expiresIn: Math.floor((new Date().getTime() + 3600000) / 1000)
    });
  })
);

/** @route   GET /usernames
 *  @desc    Get all usernames
 *  @access  Private
 */
router.get(
  "/usernames",
  [protectedRoute()],
  asyncWrapper(async (req, res) => {
    if (!req.user) {
      throw new AccessDeniedError("Permission denied!");
    }

    const response = await service.getNames();

    res.send(response);
  })
);

module.exports = router;
