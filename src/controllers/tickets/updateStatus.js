// src/controllers/tickets/updateStatus.js

export function updateStatus({ req, res, database }) {
  const { id } = req.params;

  // Adiciona um "fallback" (|| {})
  // Se req.body for 'null' ou 'undefined', ele usará {} no lugar.
  const { solution } = req.body || {}; 

  // Agora, se o corpo for vazio, 'solution' será 'undefined', o que é seguro.
  database.update("tickets", id, { status: "closed", solution });

  return res.end();
}

