const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Exemplo de rota
app.get("/", (req, res) => {
  res.send("Middleware P6 rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
