const express = require('express');
const router = express.Router();
const { getFavorites, createFavorite, deleteFavorite } = require('../controllers/favorites');
const auth = require('../middlewares/auth');

// Todas las rutas de favoritos requieren autenticación
router.get('/', auth, getFavorites);
router.post('/', auth, createFavorite);
router.delete('/:id', auth, deleteFavorite);

module.exports = router;
