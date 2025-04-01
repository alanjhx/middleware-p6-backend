const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota base para teste
app.get("/", (req, res) => {
  res.send("Middleware P6 rodando com sucesso!");
});

// Suas outras rotas aqui (exemplo):
app.get("/api/primavera/atividades", (req, res) => {
  const { projectId } = req.query;
  const atividades = projectId
    ? [{ id: 1, projeto: projectId, nome: "Atividade única" }]
    : [
        { id: 1, projeto: "P001", nome: "Atividade A" },
        { id: 2, projeto: "P002", nome: "Atividade B" }
      ];
  res.json(atividades);
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
