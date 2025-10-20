const { PrismaClient } = require("../generated/prisma");
const { all } = require("../routes/users");
const genPassword = require("./passwordUtils").genPassword;
const Prisma = new PrismaClient();

async function createUsers() {
  const usersList = [
    { username: "Mohamed", password: "Mohamed1" },
    { username: "Odin", password: "OdinsPassword1" },
    {
      username: "Hades",
      password: "Theunderworld1",
    },
  ];

  for (const user of usersList) {
    const { salt, hash } = genPassword(user.password);
    await Prisma.user.create({
      data: {
        username: user.username,
        salt: salt,
        hash: hash,
      },
    });
  }
}

async function createPosts() {
  const allAuthors = await Prisma.user.findMany();
  console.log(allAuthors);
  const postsList = [
    {
      title: "First post!",
      content: "Some random content",
      authorId: allAuthors[0].id,
    },
    {
      title: "First post!",
      content: "Some random content",
      authorId: allAuthors[1].id,
    },
    {
      title: "First post!",
      content: "Some random content",
      authorId: allAuthors[2].id,
    },
    {
      title: "First post!",
      content: "Some random content",
      authorId: allAuthors[0].id,
    },
    {
      title: "First post!",
      content: "Some random content",
      authorId: allAuthors[1].id,
    },
  ];
  const posts = await Prisma.posts.createManyAndReturn({
    data: postsList,
  });
  console.log(posts);
  return posts;
}

async function createComments(allPosts) {
  const commentsList = [
    { name: "Abdul", content: "Great post!", postId: allPosts[0].id },
    { name: "Abdul", content: "Great post!", postId: allPosts[1].id },
    { name: "Abdul", content: "Great post!", postId: allPosts[2].id },
    { name: "Abdul", content: "Great post!", postId: allPosts[3].id },
    { name: "Abdul", content: "Great post!", postId: allPosts[4].id },
    { name: "Jamal", content: "Great post!", postId: allPosts[0].id },
    { name: "Ethan", content: "Great post!", postId: allPosts[0].id },
    { name: "Tyrone", content: "Great post!", postId: allPosts[0].id },
    { name: "Evelynn", content: "Great post!", postId: allPosts[0].id },
  ];
  const allComments = await Prisma.comments.createManyAndReturn({
    data: commentsList,
  });
  console.log(allComments);
  return allComments;
}

async function main() {
  //await createUsers();
  const allPosts = await createPosts();
  await createComments(allPosts);
}

main();
