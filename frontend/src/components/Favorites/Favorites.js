import React, { useState, useEffect } from 'react';
import favoritesService from '../../services/favorites.service';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './Favorites.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Cargar favoritos al montar el componente
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await favoritesService.getFavorites();
      setFavorites(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (favoriteId) => {
    try {
      await favoritesService.deleteFavorite(favoriteId);
      // Actualizar la lista después de eliminar
      setFavorites(favorites.filter(fav => fav._id !== favoriteId));
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return (
      <div className="favorites">
        <div className="favorites__container">
          <div className="favorites__loading">Cargando favoritos...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="favorites">
        <div className="favorites__container">
          <div className="favorites__error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <div className="favorites__container">
        <h1 className="favorites__title">Mis Eventos Favoritos</h1>
        
        {favorites.length === 0 ? (
          <div className="favorites__empty">
            <p className="favorites__empty-text">
              Aún no tienes eventos favoritos.
            </p>
            <p className="favorites__empty-hint">
              Agrega eventos a tus favoritos para verlos aquí.
            </p>
          </div>
        ) : (
          <div className="favorites__grid">
            {favorites.map((favorite) => (
              <FavoriteCard
                key={favorite._id}
                favorite={favorite}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
