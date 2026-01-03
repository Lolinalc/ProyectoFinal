import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

function Header() {
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          🐱 Cat Facts App
        </Link>

        <nav className="header__nav">
          {isAuthenticated ? (
            <>
              <span className="header__user">Hola, {currentUser?.name}</span>
              <Link to="/cat-facts" className="header__link">
                Cat Facts
              </Link>
              <Link to="/favorites" className="header__link">
                ⭐ Mis Favoritos
              </Link>
              <button
                onClick={handleLogout}
                className="header__button header__button--logout"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="header__link">
                Iniciar Sesión
              </Link>
              <Link to="/signup" className="header__button">
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
