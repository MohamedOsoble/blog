const { PrismaClient } = require("../generated/prisma");
const Prisma = new PrismaClient();

module.exports.newComment = async function (req, res, next) {
  return res.json(
    await Prisma.comments.create({
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
    await Prisma.comments.create({
      data: {
        name: req.body.name,
        content: req.body.content,
        postId: req.params.postId,
        parentCommentId: req.body.parentId,
      },
    })
  );
};

module.exports.likeComment = async function (req, res, next) {
  return res.json(
    await Prisma.comments.update({
      where: { id: req.body.commentId },
      data: { likes: { increment: 1 } },
    })
  );
};

module.exports.dislikeComment = async function (req, res, next) {
  return res.json(
    await Prisma.comments.update({
      where: { id: req.body.commentId },
      data: { likes: { decrement: 1 } },
    })
  );
};

module.exports.deleteComment = async function (req, res, next) {
  return res.json(
    await Prisma.comments.delete({
      where: { id: req.params.commentId },
    })
  );
};

module.exports.updateComment = async function (req, res, next) {
  return res.json(
    await Prisma.comments.update({
      where: { id: req.params.commentId },
      data: { name: req.body.name, content: req.body.content },
    })
  );
};
