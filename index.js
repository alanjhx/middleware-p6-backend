const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

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

app.post("/api/softexpert/atividades", (req, res) => {
  console.log("Atividades recebidas do P6:", req.body);
  res.json({ status: "Atividades recebidas pelo SoftExpert" });
});

app.get("/api/softexpert/atualizacoes", (req, res) => {
  res.json([
    {
      atividadeId: 1,
      percentual: 100,
      inicio: "2024-01-01",
      fimPrevisto: "2024-02-01",
      fimReal: "2024-01-28"
    }
  ]);
});

app.post("/api/primavera/atualizar", (req, res) => {
  console.log("Atualizações recebidas do SoftExpert:", req.body);
  res.json({ status: "Atualizações aplicadas no P6" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
