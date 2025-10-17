const { Router } = require("express");
const controller = require("../controllers/posts");

const router = Router();

router.get("/", controller.allPosts);
router.get("/:postId", controller.postById);
router.get("/authors/:authorId", controller.postsByAuthor);
router.post("/", controller.newPost);
router.put("/", controller.updatePost);
router.delete("/", controller.deletePost);

module.exports = router;
