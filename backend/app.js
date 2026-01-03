const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users");
const favoritesRouter = require("./routes/favorites");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/favorites", favoritesRouter);

app.get("/", (req, res) => {
  res.json({ message: "Backend de eventos funcionando correctamente" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

module.exports = app;
