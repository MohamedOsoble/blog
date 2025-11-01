const { Router } = require("express");
const controller = require("../controllers/users");
const passport = require("passport");
const utils = require("../lib/utils");
const auth = passport.authenticate("jwt", { session: false });

const router = Router();

// Login and Logout Routes
router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (!user) {
      console.log(user);
      return res.status(400).json({
        message: "Incorrect user credentials, please check and try again",
        user: user,
      });
    } else if (err) {
      return res.status(400).json({
        message: "Something went wrong with the request, please try again",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const tokenObject = utils.issueJWT(user);
      res.cookie("jwt", tokenObject, {
        httpOnly: true,
        secure: false, // set to true in production with HTTPS
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.json({
        message: "Login successful",
        user: { id: user.id, username: user.username },
        tokenObject,
      });
    });
  })(req, res);
});

router.get("/logout", (req, res) => {
  if (req.cookies["jwt"]) {
    res.clearCookie("jwt").status(200).json({
      message: "You have logged out",
    });
  } else {
    res.status(401).json({
      error: "Invalid jwt",
    });
  }
});

router.get("/isauthenticated", auth, (req, res) => {
  console.log(req.cookies["jwt"]);
  return res.status(200).json({
    id: req.cookies["jwt"]["id"],
  });
});

// Register and user routes
router.post("/register", controller.registrationValidation, controller.newUser);
router.put("/update/byid/:userId", auth, controller.updateRole);
router.get("/get/byid/:userId", controller.findUserById);
router.get("/get/byname/:username", controller.findUserByName);

module.exports = router;
