const { Router } = require("express");
const controller = require("../controllers/comments");

const router = Router();

router.post("/:postId", controller.newComment);
router.post("/:postId/:commentId", controller.reply);
router.put("/:postId/:commentId/like", controller.likeComment);
router.put("/:postId/:commentId/dislike", controller.dislikeComment);
module.exports = router;
