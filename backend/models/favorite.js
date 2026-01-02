const mongoose = require('mongoose');

// Definición del esquema de Favorito
const favoriteSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: [true, 'El ID del evento es obligatorio']
  },
  title: {
    type: String,
    required: [true, 'El título del evento es obligatorio']
  },
  date: {
    type: String,
    required: [true, 'La fecha del evento es obligatoria']
  },
  venue: {
    type: String,
    required: [true, 'El lugar del evento es obligatorio']
  },
  image: {
    type: String,
    default: ''
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo User
    required: true
  }
}, {
  timestamps: true
});

// Índice compuesto para evitar duplicados: mismo usuario + mismo evento
favoriteSchema.index({ owner: 1, eventId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
