const { PrismaClient } = require("../generated/prisma");
const passport = require("passport");
const utils = require("../lib/utils");

const Prisma = new PrismaClient();

module.exports.auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false });

  if (
    (req.cookies["jwt"]["id"] =
      req.params.authorId || req.cookies["jwt"]["role"] === "ADMIN")
  ) {
    next();
  } else {
    return res
      .status(401)
      .json({ message: "You are not authorized to view this material" });
  }
};
