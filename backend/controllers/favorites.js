const Favorite = require('../models/favorite');

// Obtener todos los favoritos del usuario autenticado (GET /favorites)
const getFavorites = async (req, res) => {
  try {
    // req.userId viene del middleware de autenticación
    const favorites = await Favorite.find({ owner: req.userId })
      .sort({ createdAt: -1 }); // Ordenar por más recientes primero

    res.status(200).json(favorites);

  } catch (error) {
    console.error('Error en getFavorites:', error);
    res.status(500).json({ 
      message: 'Error al obtener los favoritos.' 
    });
  }
};

// Guardar un evento como favorito (POST /favorites)
const createFavorite = async (req, res) => {
  try {
    const { eventId, title, date, venue, image } = req.body;

    // Validar campos obligatorios
    if (!eventId || !title || !date || !venue) {
      return res.status(400).json({ 
        message: 'Todos los campos son obligatorios (eventId, title, date, venue).' 
      });
    }

    // Verificar si ya existe ese favorito para este usuario
    const existingFavorite = await Favorite.findOne({ 
      owner: req.userId, 
      eventId 
    });

    if (existingFavorite) {
      return res.status(400).json({ 
        message: 'Este evento ya está en tus favoritos.' 
      });
    }

    // Crear el nuevo favorito
    const newFavorite = await Favorite.create({
      eventId,
      title,
      date,
      venue,
      image: image || '',
      owner: req.userId
    });

    res.status(201).json({ 
      message: 'Evento guardado en favoritos.',
      favorite: newFavorite
    });

  } catch (error) {
    console.error('Error en createFavorite:', error);
    
    // Error de duplicado (por el índice único)
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'Este evento ya está en tus favoritos.' 
      });
    }

    res.status(500).json({ 
      message: 'Error al guardar el favorito.' 
    });
  }
};

// Eliminar un favorito (DELETE /favorites/:id)
const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar y eliminar el favorito solo si pertenece al usuario autenticado
    const favorite = await Favorite.findOneAndDelete({ 
      _id: id, 
      owner: req.userId 
    });

    if (!favorite) {
      return res.status(404).json({ 
        message: 'Favorito no encontrado.' 
      });
    }

    res.status(200).json({ 
      message: 'Evento eliminado de favoritos.' 
    });

  } catch (error) {
    console.error('Error en deleteFavorite:', error);
    res.status(500).json({ 
      message: 'Error al eliminar el favorito.' 
    });
  }
};

module.exports = {
  getFavorites,
  createFavorite,
  deleteFavorite
};
