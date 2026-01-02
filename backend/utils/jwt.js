const jwt = require('jsonwebtoken');

// Generar un token JWT para un usuario
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId }, // Payload: información que queremos guardar
    process.env.JWT_SECRET, // Clave secreta
    { expiresIn: process.env.JWT_EXPIRES_IN } // Tiempo de expiración
  );
};

// Verificar si un token es válido
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
};
