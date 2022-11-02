export default async function handler(req, res) {
  const response = await fetch(
    "https://cados.up.railway.app/advocates?limit=16"
  );
  const { advocates } = await response.json();
  res.status(200).json(advocates);
}
