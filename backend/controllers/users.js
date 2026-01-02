const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

// Registrar un nuevo usuario (POST /signup)
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Todos los campos son obligatorios.' 
      });
    }

    // Validar longitud mínima de contraseña
    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'La contraseña debe tener al menos 6 caracteres.' 
      });
    }

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        message: 'El email ya está registrado.' 
      });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ 
      message: 'Usuario creado correctamente.' 
    });

  } catch (error) {
    console.error('Error en signup:', error);
    res.status(500).json({ 
      message: 'Error al crear el usuario.' 
    });
  }
};

// Login de usuario (POST /signin)
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar que todos los campos estén presentes
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email y contraseña son obligatorios.' 
      });
    }

    // Buscar el usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        message: 'Credenciales incorrectas.' 
      });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Credenciales incorrectas.' 
      });
    }

    // Generar token JWT
    const token = generateToken(user._id);

    res.status(200).json({ 
      token 
    });

  } catch (error) {
    console.error('Error en signin:', error);
    res.status(500).json({ 
      message: 'Error al iniciar sesión.' 
    });
  }
};

// Obtener información del usuario autenticado (GET /users/me)
const getMe = async (req, res) => {
  try {
    // req.userId viene del middleware de autenticación
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ 
        message: 'Usuario no encontrado.' 
      });
    }

    // El método toJSON() del modelo ya oculta la contraseña
    res.status(200).json(user);

  } catch (error) {
    console.error('Error en getMe:', error);
    res.status(500).json({ 
      message: 'Error al obtener información del usuario.' 
    });
  }
};

module.exports = {
  signup,
  signin,
  getMe
};
