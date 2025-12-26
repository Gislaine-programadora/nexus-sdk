// backend/src/routes/admin.ts
import { Router } from 'express';
import { generateNexusKey } from '../services/KeyManager';

const router = Router();

router.post('/admin/create-key', async (req, res) => {
  const { name, email, secret } = req.body;

  // Proteção simples: só você sabe o ADMIN_SECRET
  if (secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: "Não autorizado" });
  }

  try {
    const newKeyData = await generateNexusKey(name, email);
    res.json({
      message: "API Key gerada com sucesso e saldo injetado!",
      data: newKeyData
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao gerar chave." });
  }
});