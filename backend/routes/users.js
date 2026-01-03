const express = require("express");
const router = express.Router();
const { signup, signin, getMe } = require("../controllers/users");
const auth = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/me", auth, getMe);

module.exports = router;
