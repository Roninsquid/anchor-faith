export default function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    return response.status(204).end();
  }

  return response.status(200).json({
    status: "ok",
    message: "Backend Harbor is open.",
    mission: "Anchor frontend can now speak to the engine room.",
    timestamp: new Date().toISOString()
  });
}
