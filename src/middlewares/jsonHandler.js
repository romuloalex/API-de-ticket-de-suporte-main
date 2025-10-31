// src/middlewares/jsonHandler.js

export async function jsonHandler(req, res) {
  const buffer = [];

  for await (const chunk of req) {
    buffer.push(chunk);
  }

  const bodyString = Buffer.concat(buffer).toString();

  try {
    // Se a string do corpo não for vazia, faça o parse.
    // Se for vazia, apenas defina req.body como um objeto vazio {}.
    req.body = bodyString ? JSON.parse(bodyString) : {};
  } catch (error) {
    // Se der erro no parse (JSON mal-formado),
    // também é melhor setar como {} ou enviar um erro 400
    req.body = {}; 
  }

  res.setHeader("Content-Type", "application/json");
}