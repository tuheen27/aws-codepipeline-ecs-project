import express from 'express';
import { generateToken, checkPassword } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/auth/login
 * Login with password to get JWT token
 */
router.post('/login', checkPassword, (req, res) => {
  try {
    const token = generateToken(1); // Admin user ID
    res.json({
      success: true,
      token,
      message: 'Logged in successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
