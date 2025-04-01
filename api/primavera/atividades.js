export default function handler(req, res) {
  const { projectId } = req.query;
  const atividades = projectId
    ? [{ id: 1, projeto: projectId, nome: "Atividade única" }]
    : [
        { id: 1, projeto: "P001", nome: "Atividade A" },
        { id: 2, projeto: "P002", nome: "Atividade B" }
      ];
  res.status(200).json(atividades);
}