export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { prompt } = req.body;
  const enhanced = encodeURIComponent(prompt);
  const imageUrl = `https://image.pollinations.ai/prompt/${enhanced}?width=512&height=512&nologo=true`;

  return res.status(200).json({ url: imageUrl });
}
