const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    comments: [{ name: "Mohamed", content: "Great blog post" }],
  });
});

module.exports = router;
