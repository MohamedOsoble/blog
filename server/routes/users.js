const { Router } = require("express");
const controller = require("../controllers/users");
const passport = require("passport");
const utils = require("../lib/utils");
const auth = passport.authenticate("jwt", { session: false });

const router = Router();

router.post("/register", utils.registrationValidator, controller.newUser);
router.put("/:userId", auth, controller.updateRole);
router.get("/:userId", controller.findUser);
router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      console.log(err);
      console.log(user);
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const tokenObject = utils.issueJWT(user);
      return res.json({ user, tokenObject });
    });
  })(req, res);
});

module.exports = router;
