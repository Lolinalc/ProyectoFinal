import React, { useState } from "react";
import "./FavoriteCard.css";

function FavoriteCard({ favorite, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres eliminar este cat fact de tus favoritos?"
      )
    ) {
      setIsDeleting(true);
      try {
        await onDelete(favorite._id);
      } catch (error) {
        setIsDeleting(false);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="favorite-card">
      <div className="favorite-card__content">
        <div className="favorite-card__icon">🐱</div>
        <p className="favorite-card__text">{favorite.text}</p>

        <div className="favorite-card__info">
          <span className="favorite-card__date">
            💾 Guardado: {formatDate(favorite.createdAt)}
          </span>
        </div>

        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="favorite-card__button favorite-card__button--delete"
        >
          {isDeleting ? "🗑️ Eliminando..." : "🗑️ Eliminar"}
        </button>
      </div>
    </div>
  );
}

export default FavoriteCard;
