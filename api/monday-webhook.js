export default async function handler(req, res) {
  // monday webhook challenge verification
  if (req.body && req.body.challenge) {
    return res.status(200).json({ challenge: req.body.challenge });
  }

  // normal webhook events
  if (req.method === "POST") {
    console.log("Webhook received:", req.body);
    return res.status(200).json({ ok: true });
  }

  return res.status(200).send("OK");
}
