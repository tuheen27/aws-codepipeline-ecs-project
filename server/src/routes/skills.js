import express from 'express';
import { getDatabase } from '../db/init.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/skills
 * Get all skills
 */
router.get('/', async (req, res) => {
  try {
    const db = await getDatabase();
    db.all('SELECT * FROM skills ORDER BY category, name', (err, rows) => {
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
 * POST /api/skills
 * Create new skill
 */
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, level, category } = req.body;

    if (!name || !category) {
      return res.status(400).json({ error: 'Missing required fields: name, category' });
    }

    const db = await getDatabase();
    const query = `
      INSERT INTO skills (name, level, category)
      VALUES (?, ?, ?)
    `;

    db.run(query, [name, level || 0, category], function(err) {
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
 * PUT /api/skills/:id
 * Update skill
 */
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, category } = req.body;

    const db = await getDatabase();
    const query = `
      UPDATE skills 
      SET name = ?, level = ?, category = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    db.run(query, [name, level, category, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Skill not found' });
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
 * DELETE /api/skills/:id
 * Delete skill
 */
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDatabase();
    
    db.run('DELETE FROM skills WHERE id = ?', [id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Skill not found' });
      } else {
        res.json({ success: true, message: 'Skill deleted' });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
