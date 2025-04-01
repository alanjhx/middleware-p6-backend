const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Middleware P6 real rodando com sucesso!");
});

// Rota para buscar atividades do Primavera P6
app.get("/api/primavera/atividades", async (req, res) => {
  const { projectId } = req.query;
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "Token não enviado" });

  try {
    const response = await axios.get(
      `${process.env.P6_API_URL}/projects/${projectId}/activities`,
      {
        headers: {
          Authorization: token,
          Accept: "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar atividades", detalhes: err.message });
  }
});

// Rota para enviar atividades ao SoftExpert
app.post("/api/softexpert/atividades", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: "Token não enviado" });

  try {
    const response = await axios.post(
      `${process.env.SEX_API_URL}/insert`, // ajustar se necessário
      req.body,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao enviar atividades ao SoftExpert", detalhes: err.message });
  }
});

// Rota para buscar atualizações do SoftExpert
app.get("/api/softexpert/atualizacoes", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const response = await axios.get(`${process.env.SEX_API_URL}/updates`, {
      headers: {
        Authorization: token,
        Accept: "application/json",
      },
    });

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar atualizações", detalhes: err.message });
  }
});

// Rota para atualizar dados no Primavera P6
app.post("/api/primavera/atualizar", async (req, res) => {
  const token = req.headers.authorization;

  try {
    const response = await axios.post(
      `${process.env.P6_API_URL}/update`, // ajustar se necessário
      req.body,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar no P6", detalhes: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor real rodando na porta ${PORT}`);
});
