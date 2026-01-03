const CAT_FACTS_API = "https://catfact.ninja";
const CAT_FACTS_BACKUP_API = "https://cat-fact.herokuapp.com";

class CatFactsService {
  constructor() {
    this.counter = 0;
  }

  async getRandomFact() {
    try {
      const response = await fetch(`${CAT_FACTS_API}/fact`);

      if (!response.ok) {
        throw new Error("Error al obtener cat fact");
      }

      const data = await response.json();

      return {
        _id: this.generateId(),
        text: data.fact,
        type: "cat",
      };
    } catch (error) {
      return this.getRandomFactBackup();
    }
  }

  async getRandomFactBackup() {
    try {
      const response = await fetch(`${CAT_FACTS_BACKUP_API}/facts/random`);

      if (!response.ok) {
        throw new Error("Error al obtener cat fact");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        "No se pudieron cargar los cat facts. Por favor, intenta de nuevo."
      );
    }
  }

  async getFacts(limit = 10) {
    try {
      const facts = [];

      for (let i = 0; i < limit; i++) {
        const fact = await this.getRandomFact();
        facts.push(fact);
        await this.sleep(10);
      }

      return facts;
    } catch (error) {
      return this.getFactsBackup(limit);
    }
  }

  async getFactsBackup(limit = 10) {
    try {
      const response = await fetch(
        `${CAT_FACTS_BACKUP_API}/facts?limit=${limit}&animal_type=cat`
      );

      if (!response.ok) {
        throw new Error("Error al obtener cat facts");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(
        "No se pudieron cargar los cat facts. Por favor, intenta de nuevo."
      );
    }
  }

  generateId() {
    this.counter++;
    return (
      "fact_" +
      Date.now() +
      "_" +
      this.counter +
      "_" +
      Math.random().toString(36).substr(2, 9)
    );
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default new CatFactsService();
