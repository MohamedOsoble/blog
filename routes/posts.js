const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    posts: [{ title: "Test Title", author: "Mohamed", content: "Hello world" }],
  });
});

module.exports = router;
