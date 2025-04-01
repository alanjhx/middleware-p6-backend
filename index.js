
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Simular banco de dados em memória
let atividades = [
  { id: "ACT1001", nome: "Atividade 1", status: "Em andamento", percentual: 40 },
  { id: "ACT1002", nome: "Atividade 2", status: "Concluído", percentual: 100 }
];

// Endpoint GET /api/primavera/atividades
app.get("/api/primavera/atividades", (req, res) => {
  const { projectId } = req.query;
  console.log("Token recebido:", req.headers.authorization);
  if (projectId) {
    res.json(atividades.filter(a => a.id.includes(projectId)));
  } else {
    res.json(atividades);
  }
});

// Endpoint POST /api/softexpert/atividades
app.post("/api/softexpert/atividades", (req, res) => {
  console.log("Atividades recebidas para o SoftExpert:", req.body);
  res.json({ status: "Atividades recebidas no SoftExpert com sucesso." });
});

// Endpoint GET /api/softexpert/atualizacoes
app.get("/api/softexpert/atualizacoes", (req, res) => {
  const atualizacoes = atividades.map(a => ({
    id: a.id,
    percentual: a.percentual + 10 > 100 ? 100 : a.percentual + 10,
    dataInicio: "2025-04-01",
    dataFim: "2025-04-10",
    dataPrevista: "2025-04-12"
  }));
  res.json(atualizacoes);
});

// Endpoint POST /api/primavera/atualizar
app.post("/api/primavera/atualizar", (req, res) => {
  console.log("Atualizações recebidas para Primavera:", req.body);
  res.json({ status: "Primavera atualizado com sucesso." });
});

app.listen(PORT, () => {
  console.log(`Middleware rodando em http://localhost:${PORT}`);
});
