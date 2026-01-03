const { verifyToken } = require("../utils/jwt");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Acceso denegado. No se proporcionó token de autenticación.",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        message: "Token inválido o expirado.",
      });
    }

    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Error en la autenticación.",
    });
  }
};

module.exports = auth;
