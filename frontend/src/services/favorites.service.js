const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

class FavoritesService {
  getAuthHeader() {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  async getFavorites() {
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        method: "GET",
        headers: {
          ...this.getAuthHeader(),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al obtener favoritos");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createFavorite(eventData) {
    try {
      const response = await fetch(`${API_URL}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...this.getAuthHeader(),
        },
        body: JSON.stringify(eventData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al guardar favorito");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteFavorite(favoriteId) {
    try {
      const response = await fetch(`${API_URL}/favorites/${favoriteId}`, {
        method: "DELETE",
        headers: {
          ...this.getAuthHeader(),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al eliminar favorito");
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new FavoritesService();
