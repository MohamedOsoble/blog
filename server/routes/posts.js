const router = require("express").Router();
const controller = require("../controllers/posts");
const passport = require("passport");
const utils = require("../lib/utils");
const auth = passport.authenticate("jwt", { session: false });

const checkCookies = (req, res, next) => {
  const cookie = req.cookies["jwt"]["token"].split(" ");
  console.log(req.cookies);
  next();
};

router.get("/", controller.allPosts);
router.get("/:postId", controller.postById);
router.get("/authors/:authorId", auth, controller.postsByAuthor);
router.post("/", auth, controller.newPost);
router.put("/", auth, controller.updatePost);
router.delete("/", auth, controller.deletePost);

module.exports = router;
