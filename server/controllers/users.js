const { PrismaClient } = require("../generated/prisma");
const genPassword = require("../lib/utils").genPassword;
const { validationResult } = require("express-validator");
require("dotenv").config();

const Prisma = new PrismaClient();
const RegisterKey = process.env.REGISTER_KEY;

module.exports.registrationValidation = async function (req, res, next) {
  console.log(req.body.register_key, RegisterKey);
  if (req.body.register_key != RegisterKey) {
    return res
      .status(400)
      .json({ success: false, error: "Invalid Registration key" });
  } else {
    next();
  }
};

module.exports.newUser = async function (req, res, next) {
  const { salt, hash } = genPassword(req.body.password);
  const user = await Prisma.user.create({
    data: {
      username: req.body.username,
      salt: salt,
      hash: hash,
    },
  });
  return res
    .status(200)
    .json({ success: true, user: { id: user.id, name: user.username } });
};

module.exports.updateRole = async function (req, res, next) {
  try {
    const update = await Prisma.user.update({
      where: { id: req.params.userId },
      data: { role: req.body.role },
    });
    return res.json({ success: true, user: update });
  } catch (err) {
    return res.status(400).json({ success: false, user: update });
  }
};

module.exports.findUserById = async function (req, res, next) {
  try {
    const user = await Prisma.user.findFirst({
      where: { id: req.body.userId },
    });
    return res.json({ success: true, user: { name: user.username } });
  } catch (err) {
    return res.status(400).json({ success: false, user: null });
  }
};

module.exports.findUserByName = async function (req, res, next) {
  try {
    const user = await Prisma.user.findFirst({
      where: {
        username: {
          equals: req.params.username,
          mode: "insensitive",
        },
      },
    });
    if (user) {
      return res.json({ success: true, user: { name: user.username } });
    } else {
      return res.json({ success: false, user: null });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, user: { name: user.username } });
  }
};
