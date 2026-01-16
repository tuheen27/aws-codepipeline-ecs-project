import express from 'express';
import { getDatabase } from '../db/init.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/experience
 * Get all experience entries
 */
router.get('/', async (req, res) => {
  try {
    const db = await getDatabase();
    db.all('SELECT * FROM experience ORDER BY id DESC', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows || []);
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/experience
 * Create new experience entry
 */
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, company, period, description } = req.body;

    if (!title || !company || !period) {
      return res.status(400).json({ error: 'Missing required fields: title, company, period' });
    }

    const db = await getDatabase();
    const query = `
      INSERT INTO experience (title, company, period, description)
      VALUES (?, ?, ?, ?)
    `;

    db.run(query, [title, company, period, description], function(err) {
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

/**
 * PUT /api/experience/:id
 * Update experience entry
 */
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, period, description } = req.body;

    const db = await getDatabase();
    const query = `
      UPDATE experience 
      SET title = ?, company = ?, period = ?, description = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    db.run(query, [title, company, period, description, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Experience not found' });
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
 * DELETE /api/experience/:id
 * Delete experience entry
 */
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDatabase();
    
    db.run('DELETE FROM experience WHERE id = ?', [id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Experience not found' });
      } else {
        res.json({ success: true, message: 'Experience deleted' });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
