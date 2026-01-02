const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const favoritesRouter = require('./routes/favorites');

const app = express();

// Middlewares globales
app.use(cors()); // Permitir peticiones desde el frontend
app.use(express.json()); // Parsear JSON en las peticiones

// Rutas
app.use('/users', usersRouter); // /users/signup, /users/signin, /users/me
app.use('/favorites', favoritesRouter); // /favorites

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Backend de eventos funcionando correctamente' });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

module.exports = app;
