import express from 'express';
import { getDatabase } from '../db/init.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/personal
 * Get personal information
 */
router.get('/', async (req, res) => {
  try {
    const db = await getDatabase();
    db.get('SELECT * FROM personal_info ORDER BY id DESC LIMIT 1', (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(row || {});
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/personal/:id
 * Update personal information
 */
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, tagline, email, phone, location, bio, avatar, resumeUrl } = req.body;

    const db = await getDatabase();
    const query = `
      UPDATE personal_info 
      SET name = ?, title = ?, tagline = ?, email = ?, phone = ?, location = ?, bio = ?, avatar = ?, resumeUrl = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    db.run(query, [name, title, tagline, email, phone, location, bio, avatar, resumeUrl, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ success: true, changes: this.changes });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/personal
 * Create personal information
 */
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, title, tagline, email, phone, location, bio, avatar, resumeUrl } = req.body;

    const db = await getDatabase();
    const query = `
      INSERT INTO personal_info (name, title, tagline, email, phone, location, bio, avatar, resumeUrl)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [name, title, tagline, email, phone, location, bio, avatar, resumeUrl], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ success: true, id: this.lastID });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
