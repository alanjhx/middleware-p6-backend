export default function handler(req, res) {
  const atualizacoes = req.body;
  console.log("Atualizações recebidas:", atualizacoes);
  res.status(200).json({ status: "Atualizações aplicadas no P6" });
}