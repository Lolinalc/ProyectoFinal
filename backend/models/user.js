const mongoose = require('mongoose');

// Definición del esquema de Usuario
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    minlength: [2, 'El nombre debe tener al menos 2 caracteres']
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Método para ocultar la contraseña en las respuestas JSON
userSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password; // No enviar la contraseña al frontend
  return user;
};

module.exports = mongoose.model('User', userSchema);
