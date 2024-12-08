import { Router } from 'express';
import contactRoutes from './contacts.js';
import authRoutes from './auth.js';

const router = Router();

router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);

export default router;
