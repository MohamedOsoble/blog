const router = require("express").Router();
const controller = require("../controllers/posts");
const passport = require("passport");
const utils = require("../lib/utils");
const auth = passport.authenticate("jwt", { session: false });

router.get("/", controller.allPosts);
router.get("/:postId", controller.postById);
router.get("/authors/:authorId", controller.postsByAuthor);
router.post("/", auth, utils.postValidator, controller.newPost);
router.put("/", auth, controller.updatePost);
router.delete("/", auth, controller.deletePost);

module.exports = router;
