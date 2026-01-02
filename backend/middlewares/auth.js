const { verifyToken } = require('../utils/jwt');

// Middleware para verificar que el usuario está autenticado
const auth = (req, res, next) => {
  try {
    // Obtener el token del header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        message: 'Acceso denegado. No se proporcionó token de autenticación.' 
      });
    }

    // Extraer el token (formato: "Bearer <token>")
    const token = authHeader.split(' ')[1];

    // Verificar el token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ 
        message: 'Token inválido o expirado.' 
      });
    }

    // Guardar el ID del usuario en req para usarlo en los controladores
    req.userId = decoded.id;
    
    // Continuar con el siguiente middleware o controlador
    next();
  } catch (error) {
    return res.status(401).json({ 
      message: 'Error en la autenticación.' 
    });
  }
};

module.exports = auth;
