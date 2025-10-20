const { PrismaClient } = require("../generated/prisma");
const Prisma = new PrismaClient();

module.exports.allPosts = async function (req, res, next) {
  return res.json(await Prisma.posts.findMany({}));
};

module.exports.postById = async function (req, res, next) {
  return res.json(
    await Prisma.posts.findFirst({
      where: { id: req.params.postId },
      include: { comments: true },
    })
  );
};

module.exports.postsByAuthor = async function (req, res, next) {
  return res.json(
    await Prisma.posts.findMany({
      where: { authorId: req.params.authorId },
    })
  );
};

module.exports.newPost = async function (req, res, next) {
  return res.json(
    await Prisma.posts.create({
      data: {
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId,
        isPublished: req.body.isPublished,
      },
    })
  );
};

module.exports.updatePost = async function (req, res, next) {
  return res.json(
    await Prisma.posts.update({
      where: { id: req.body.postId },
      data: {
        title: req.body.title,
        content: req.body.content,
        isPublished: req.body.isPublished,
      },
    })
  );
};

module.exports.deletePost = async function (req, res, next) {
  return res.json(
    await Prisma.posts.delete({
      where: { id: req.body.postId },
    })
  );
};
