export default function handler(req, res) {
  res.status(200).json([
    {
      atividadeId: 1,
      percentual: 100,
      inicio: "2024-01-01",
      fimPrevisto: "2024-02-01",
      fimReal: "2024-01-28"
    }
  ]);
}