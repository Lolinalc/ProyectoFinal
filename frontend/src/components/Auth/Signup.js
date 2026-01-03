import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Auth.css';

function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  
  const [formData, setFormData] = useState({
    name: '',
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
      await signup(formData.name, formData.email, formData.password);
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
        <h1 className="auth__title">Crear Cuenta</h1>
        
        {error && (
          <div className="auth__error">
            {error}
          </div>
        )}

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__form-group">
            <label className="auth__label" htmlFor="name">
              Nombre
            </label>
            <input
              className="auth__input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

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
              minLength="6"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <button 
            className="auth__button" 
            type="submit"
            disabled={loading}
          >
            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>
        </form>

        <p className="auth__link-text">
          ¿Ya tienes cuenta?{' '}
          <Link to="/signin" className="auth__link">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
