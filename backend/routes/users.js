const express = require('express');
const router = express.Router();
const { signup, signin, getMe } = require('../controllers/users');
const auth = require('../middlewares/auth');

// Rutas públicas (no requieren autenticación)
router.post('/signup', signup);
router.post('/signin', signin);

// Rutas protegidas (requieren autenticación)
router.get('/me', auth, getMe);

module.exports = router;
