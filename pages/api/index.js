export default async function handler(req, res) {
  const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.q}&types=establishment&key=AIzaSyBOcxIZzfq5AtzywMF8MwpKyX2AUM6gUvY`)
  const data = await response.json()
  res.status(200).json(data)
}