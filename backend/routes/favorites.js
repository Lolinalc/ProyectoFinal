const express = require("express");
const router = express.Router();
const {
  getFavorites,
  createFavorite,
  deleteFavorite,
} = require("../controllers/favorites");
const auth = require("../middlewares/auth");

router.get("/", auth, getFavorites);
router.post("/", auth, createFavorite);
router.delete("/:id", auth, deleteFavorite);

module.exports = router;
