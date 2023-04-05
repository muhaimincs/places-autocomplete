export default async function handler(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.q}&types=establishment&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}`)
  const data = await response.json()
  res.status(200).json(data)
}