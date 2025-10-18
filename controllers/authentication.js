const { PrismaClient } = require("../generated/prisma");
const utils = require("../lib/utils");

const Prisma = new PrismaClient();

router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
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
