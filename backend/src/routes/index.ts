import { Router } from 'express';
import { sendNexusTransaction } from '../controllers/transactionController';
import { validateNexusKey } from '../middleware/auth';

const router = Router();

// Rota que o SDK vai chamar
router.post('/v1/transact', validateNexusKey, sendNexusTransaction);

export default router;