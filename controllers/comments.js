const { PrismaClient } = require("../generated/prisma");
const Prisma = new PrismaClient();

module.exports.newComment = async function (req, res, next) {
  return res.json(
    Prisma.comments.create({
      data: {
        name: req.body.name,
        content: req.body.content,
        postId: req.params.postId,
      },
    })
  );
};

module.exports.reply = async function (req, res, next) {
  return res.json(
    Prisma.comments.create({
      data: {
        name: req.body.name,
        content: req.body.content,
        postId: req.params.postId,
        parentCommentId: req.body.commentId,
      },
    })
  );
};

module.exports.likeComment = async function (req, res, next) {
  return res.json(
    Prisma.comments.update({
      where: { id: req.body.commentId },
      data: { likes: { increment: 1 } },
    })
  );
};

module.exports.dislikeComment = async function (req, res, next) {
  return res.json(
    Prisma.comments.update({
      where: { id: req.body.commentId },
      data: { likes: { decrement: 1 } },
    })
  );
};
