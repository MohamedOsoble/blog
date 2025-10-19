const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("../generated/prisma");

// Instantiate Prisma Client
const Prisma = new PrismaClient();

// TODO
module.exports.validPassword = (password, hash, salt) => {
  const hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return hash === hashVerify;
};

module.exports.genPassword = (password) => {
  const salt = crypto.randomBytes(32).toString("hex");
  const genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");
  return {
    salt: salt,
    hash: genHash,
  };
};

module.exports.issueJWT = (user) => {
  const id = user.id;
  const expiresIn = "1d";
  const payload = {
    sub: id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: expiresIn,
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

module.exports.registrationValidator = [
  body("username")
    .isLength({ min: 4, max: 15 })
    .withMessage("Username must be between 4 - 15 Characters long")
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers")
    .custom(async (value) => {
      const existingUser = await Prisma.user.findFirst({
        where: { username: value },
      });
      if (existingUser) {
        throw new Error("Username already in use");
      }
    })
    .exists()
    .withMessage("Username is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Minimum password length is 8")
    .exists()
    .withMessage("Password is a required field"),
  body("conPassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passwords do not match"),
  body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .exists()
    .withMessage("Email field is required")
    .custom(async (value) => {
      const existingEmail = await Prisma.user.findFirst({
        where: { email: value },
      });
      if (existingEmail) {
        throw new Error("Email already in use");
      }
    })
    .withMessage("Email already in use"),
];

module.exports.postValidator = [
  body("title").notEmpty().withMessage("The title cannot be empty"),
  body("content").notEmpty().withMessage("Content is required"),
];
