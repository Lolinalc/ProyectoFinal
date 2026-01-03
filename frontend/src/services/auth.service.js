// Servicio para manejar todas las peticiones relacionadas con autenticación

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class AuthService {
  // Registrar un nuevo usuario
  async signup(name, email, password) {
    try {
      const response = await fetch(`${API_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al registrar usuario');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Iniciar sesión
  async signin(email, password) {
    try {
      const response = await fetch(`${API_URL}/users/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al iniciar sesión');
      }

      // Guardar token en localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Cerrar sesión
  logout() {
    localStorage.removeItem('token');
  }

  // Obtener token actual
  getToken() {
    return localStorage.getItem('token');
  }

  // Verificar si el usuario está autenticado
  isAuthenticated() {
    return !!this.getToken();
  }

  // Obtener información del usuario actual
  async getCurrentUser() {
    try {
      const token = this.getToken();
      
      if (!token) {
        throw new Error('No hay token de autenticación');
      }

      const response = await fetch(`${API_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al obtener usuario');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthService();
