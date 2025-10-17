const { PrismaClient } = require("../generated/prisma");
const genPassword = require("../utils/passwordUtils").genPassword;

const Prisma = new PrismaClient();

module.exports.newUser = async function (req, res, next) {
  const { salt, hash } = genPassword(req.body.password);
  return res.json(
    Prisma.user.create({
      data: {
        username: req.body.username,
        salt: salt,
        hash: hash,
      },
    })
  );
};

module.exports.updateRole = async function (req, res, next) {
  return res.json(
    Prisma.user.update({
      where: { id: req.params.userId },
      data: { role: req.body.role },
    })
  );
};

module.exports.findUser = async function (req, res, next) {
  return res.json(
    Prisma.user.findFirst({
      where: { id: req.body.userId },
    })
  );
};
