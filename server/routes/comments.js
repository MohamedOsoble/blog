const { Router } = require("express");
const controller = require("../controllers/comments");
const passport = require("passport");
const auth = passport.authenticate("jwt", { session: false });

const router = Router();

router.post("/:postId", controller.newComment);
router.post("/:postId/:commentId", controller.reply);
router.put("/:postId/:commentId/like", controller.likeComment);
router.put("/:postId/:commentId/dislike", controller.dislikeComment);
router.delete("/:commentId", auth, controller.deleteComment);
router.put("/:commentId", auth, controller.updateComment);
module.exports = router;
