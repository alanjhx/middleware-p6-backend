export default function handler(req, res) {
  const atividades = req.body;
  console.log("Atividades recebidas do P6:", atividades);
  res.status(200).json({ status: "Atividades recebidas pelo SoftExpert" });
}