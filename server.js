// Servidor estático mínimo para servir a pasta /public.
// O Railway injeta a porta na variável de ambiente PORT.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// Qualquer rota cai no index.html (a navegação é por hash, no front-end).
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Tibia Tracker rodando em http://localhost:${PORT}`);
});
