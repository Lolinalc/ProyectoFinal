import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

function Signin() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signin(formData.email, formData.password);
      navigate('/favorites');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <h1 className="auth__title">Iniciar Sesión</h1>
        
        {error && (
          <div className="auth__error">
            {error}
          </div>
        )}

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__form-group">
            <label className="auth__label" htmlFor="email">
              Email
            </label>
            <input
              className="auth__input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className="auth__form-group">
            <label className="auth__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="auth__input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Tu contraseña"
            />
          </div>

          <button 
            className="auth__button" 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        <p className="auth__link-text">
          ¿No tienes cuenta?{' '}
          <Link to="/signup" className="auth__link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
