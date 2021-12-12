const express = require("express");
const router = express.Router();

const { registerController, loginController } = require("../controllers/auth");

router.post("/signup", registerController);
router.post("/signin", loginController);

module.exports = router;
