const { Router } = require("express");
const controller = require("../controllers/users");

const router = Router();

router.post("/", controller.newUser);
router.put("/:userId", controller.updateRole);
router.get(":/userId", controller.findUser);

module.exports = router;
