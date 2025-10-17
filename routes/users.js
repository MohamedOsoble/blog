const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    users: [{ name: "Mohamed", role: "Author" }],
  });
});

module.exports = router;
