import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Home.css";

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <h1 className="home__title">🐱 Cat Facts App</h1>
          <p className="home__subtitle">
            Descubre datos curiosos sobre gatos y guarda tus favoritos
          </p>

          <div className="home__features">
            <div className="home__feature">
              <span className="home__feature-icon">📚</span>
              <h3 className="home__feature-title">Aprende</h3>
              <p className="home__feature-text">
                Descubre datos fascinantes sobre gatos cada día
              </p>
            </div>

            <div className="home__feature">
              <span className="home__feature-icon">⭐</span>
              <h3 className="home__feature-title">Guarda</h3>
              <p className="home__feature-text">
                Marca tus cat facts favoritos y tenlos siempre a mano
              </p>
            </div>

            <div className="home__feature">
              <span className="home__feature-icon">🎉</span>
              <h3 className="home__feature-title">Comparte</h3>
              <p className="home__feature-text">
                Sorprende a tus amigos con datos curiosos sobre gatos
              </p>
            </div>
          </div>

          {!isAuthenticated && (
            <div className="home__cta">
              <Link to="/signup" className="home__button home__button--primary">
                Comenzar Ahora
              </Link>
              <Link
                to="/signin"
                className="home__button home__button--secondary"
              >
                Iniciar Sesión
              </Link>
            </div>
          )}

          {isAuthenticated && (
            <div className="home__cta">
              <Link
                to="/cat-facts"
                className="home__button home__button--primary"
              >
                Ver Cat Facts
              </Link>
              <Link
                to="/favorites"
                className="home__button home__button--secondary"
              >
                Mis Favoritos
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
