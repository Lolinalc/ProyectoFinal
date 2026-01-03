import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import catFactsService from "../../services/catfacts.service";
import favoritesService from "../../services/favorites.service";
import "./CatFacts.css";

function CatFacts() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [savingFactId, setSavingFactId] = useState(null);

  useEffect(() => {
    loadFacts();
  }, []);

  const loadFacts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await catFactsService.getFacts(20);
      setFacts(data);
    } catch (err) {
      setError("Error al cargar cat facts. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveFavorite = async (fact) => {
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }

    try {
      setSavingFactId(fact._id);
      await favoritesService.createFavorite({
        factId: fact._id,
        text: fact.text,
        type: fact.type || "cat",
      });
      alert("¡Cat fact guardado en favoritos!");
    } catch (err) {
      alert(err.message);
    } finally {
      setSavingFactId(null);
    }
  };

  const handleRefresh = () => {
    loadFacts();
  };

  if (loading) {
    return (
      <div className="cat-facts">
        <div className="cat-facts__container">
          <div className="cat-facts__loading">🐱 Cargando cat facts...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="cat-facts">
      <div className="cat-facts__container">
        <div className="cat-facts__header">
          <h1 className="cat-facts__title">🐱 Cat Facts Diarios</h1>
          <p className="cat-facts__subtitle">
            Descubre datos curiosos sobre gatos cada día
          </p>
          <button
            onClick={handleRefresh}
            className="cat-facts__refresh-button"
            disabled={loading}
          >
            🔄 Cargar más facts
          </button>
        </div>

        {error && <div className="cat-facts__error">{error}</div>}

        <div className="cat-facts__grid">
          {facts.map((fact) => (
            <div key={fact._id} className="cat-fact-card">
              <div className="cat-fact-card__icon">🐱</div>
              <p className="cat-fact-card__text">{fact.text}</p>
              <button
                onClick={() => handleSaveFavorite(fact)}
                disabled={savingFactId === fact._id}
                className="cat-fact-card__button"
              >
                {savingFactId === fact._id
                  ? "💾 Guardando..."
                  : "⭐ Guardar en favoritos"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatFacts;
