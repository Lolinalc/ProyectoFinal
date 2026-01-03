import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Home.css';

function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__hero">
          <h1 className="home__title">
            Bienvenido a Mis Eventos
          </h1>
          <p className="home__subtitle">
            Guarda y organiza tus eventos favoritos en un solo lugar
          </p>
          
          <div className="home__features">
            <div className="home__feature">
              <span className="home__feature-icon">🎫</span>
              <h3 className="home__feature-title">Guarda Eventos</h3>
              <p className="home__feature-text">
                Agrega tus eventos favoritos y tenlos siempre a mano
              </p>
            </div>
            
            <div className="home__feature">
              <span className="home__feature-icon">📅</span>
              <h3 className="home__feature-title">Organiza</h3>
              <p className="home__feature-text">
                Mantén un registro de todos tus eventos importantes
              </p>
            </div>
            
            <div className="home__feature">
              <span className="home__feature-icon">🔔</span>
              <h3 className="home__feature-title">No te pierdas nada</h3>
              <p className="home__feature-text">
                Accede fácilmente a la información de tus eventos
              </p>
            </div>
          </div>

          {!isAuthenticated && (
            <div className="home__cta">
              <Link to="/signup" className="home__button home__button--primary">
                Comenzar Ahora
              </Link>
              <Link to="/signin" className="home__button home__button--secondary">
                Iniciar Sesión
              </Link>
            </div>
          )}

          {isAuthenticated && (
            <div className="home__cta">
              <Link to="/favorites" className="home__button home__button--primary">
                Ver Mis Favoritos
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
