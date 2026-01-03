// Servicio para manejar todas las peticiones relacionadas con favoritos

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class FavoritesService {
  // Obtener el token de autenticación
  getAuthHeader() {
    const token = localStorage.getItem('token');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  // Obtener todos los favoritos del usuario
  async getFavorites() {
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        method: 'GET',
        headers: {
          ...this.getAuthHeader(),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al obtener favoritos');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Guardar un evento como favorito
  async createFavorite(eventData) {
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeader(),
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al guardar favorito');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  // Eliminar un favorito
  async deleteFavorite(favoriteId) {
    try {
      const response = await fetch(`${API_URL}/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: {
          ...this.getAuthHeader(),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al eliminar favorito');
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new FavoritesService();
