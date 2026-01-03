import React, { useState } from 'react';
import './FavoriteCard.css';

function FavoriteCard({ favorite, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este evento de tus favoritos?')) {
      setIsDeleting(true);
      try {
        await onDelete(favorite._id);
      } catch (error) {
        setIsDeleting(false);
      }
    }
  };

  // Formatear la fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="favorite-card">
      {favorite.image && (
        <div className="favorite-card__image-container">
          <img 
            src={favorite.image} 
            alt={favorite.title}
            className="favorite-card__image"
          />
        </div>
      )}
      
      <div className="favorite-card__content">
        <h3 className="favorite-card__title">{favorite.title}</h3>
        
        <div className="favorite-card__info">
          <div className="favorite-card__info-item">
            <span className="favorite-card__icon">📅</span>
            <span className="favorite-card__text">
              {formatDate(favorite.date)}
            </span>
          </div>
          
          <div className="favorite-card__info-item">
            <span className="favorite-card__icon">📍</span>
            <span className="favorite-card__text">{favorite.venue}</span>
          </div>
        </div>

        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="favorite-card__button favorite-card__button--delete"
        >
          {isDeleting ? 'Eliminando...' : 'Eliminar'}
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;
