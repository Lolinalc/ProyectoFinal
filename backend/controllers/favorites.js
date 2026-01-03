const Favorite = require("../models/favorite");

const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ owner: req.userId }).sort({
      createdAt: -1,
    });

    res.status(200).json(favorites);
  } catch (error) {
    console.error("Error en getFavorites:", error);
    res.status(500).json({
      message: "Error al obtener los cat facts favoritos.",
    });
  }
};

const createFavorite = async (req, res) => {
  try {
    const { factId, text, type } = req.body;

    if (!factId || !text) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios (factId, text).",
      });
    }

    const existingFavorite = await Favorite.findOne({
      owner: req.userId,
      factId,
    });

    if (existingFavorite) {
      return res.status(400).json({
        message: "Este cat fact ya está en tus favoritos.",
      });
    }

    const newFavorite = await Favorite.create({
      factId,
      text,
      type: type || "cat",
      owner: req.userId,
    });

    res.status(201).json({
      message: "Cat fact guardado en favoritos.",
      favorite: newFavorite,
    });
  } catch (error) {
    console.error("Error en createFavorite:", error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Este cat fact ya está en tus favoritos.",
      });
    }

    res.status(500).json({
      message: "Error al guardar el favorito.",
    });
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const favorite = await Favorite.findOneAndDelete({
      _id: id,
      owner: req.userId,
    });

    if (!favorite) {
      return res.status(404).json({
        message: "Favorito no encontrado.",
      });
    }

    res.status(200).json({
      message: "Cat fact eliminado de favoritos.",
    });
  } catch (error) {
    console.error("Error en deleteFavorite:", error);
    res.status(500).json({
      message: "Error al eliminar el favorito.",
    });
  }
};

module.exports = {
  getFavorites,
  createFavorite,
  deleteFavorite,
};
