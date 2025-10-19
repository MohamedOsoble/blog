const { PrismaClient } = require("../generated/prisma");
const genPassword = require("../lib/utils").genPassword;
const { validationResult } = require("express-validator");

const Prisma = new PrismaClient();

module.exports.newUser = async function (req, res, next) {
  const errors = validationResult(req);
  console.error(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors });
  } else {
    const { salt, hash } = genPassword(req.body.password);
    const user = await Prisma.user.create({
      data: {
        username: req.body.username,
        salt: salt,
        hash: hash,
      },
    });
    return res.status(200).json({ success: true, user: user });
  }
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

module.exports.findUser = async function (req, res, next) {
  try {
    const user = await Prisma.user.findFirst({
      where: { id: req.body.userId },
    });
    return res.json({ success: true, user: user });
  } catch (err) {
    return res.status(400).json({ success: false, user: user });
  }
};
