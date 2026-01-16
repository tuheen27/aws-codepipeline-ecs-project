import express from 'express';
import { getDatabase } from '../db/init.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/projects
 * Get all projects
 */
router.get('/', async (req, res) => {
  try {
    const db = await getDatabase();
    db.all('SELECT * FROM projects ORDER BY created_at DESC', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        const projects = rows.map(p => ({
          ...p,
          tags: JSON.parse(p.tags || '[]')
        }));
        res.json(projects);
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * GET /api/projects/:id
 * Get single project
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDatabase();
    db.get('SELECT * FROM projects WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!row) {
        res.status(404).json({ error: 'Project not found' });
      } else {
        res.json({
          ...row,
          tags: JSON.parse(row.tags || '[]')
        });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/projects
 * Create new project
 */
router.post('/', verifyToken, async (req, res) => {
  try {
    const { id, title, description, tags, image, liveUrl, githubUrl } = req.body;

    if (!id || !title || !description) {
      return res.status(400).json({ error: 'Missing required fields: id, title, description' });
    }

    const db = await getDatabase();
    const query = `
      INSERT INTO projects (id, title, description, tags, image, liveUrl, githubUrl)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [id, title, description, JSON.stringify(tags || []), image, liveUrl, githubUrl], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ success: true, id });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/projects/:id
 * Update project
 */
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, tags, image, liveUrl, githubUrl } = req.body;

    const db = await getDatabase();
    const query = `
      UPDATE projects 
      SET title = ?, description = ?, tags = ?, image = ?, liveUrl = ?, githubUrl = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    db.run(query, [title, description, JSON.stringify(tags || []), image, liveUrl, githubUrl, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Project not found' });
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
 * DELETE /api/projects/:id
 * Delete project
 */
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getDatabase();
    
    db.run('DELETE FROM projects WHERE id = ?', [id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (this.changes === 0) {
        res.status(404).json({ error: 'Project not found' });
      } else {
        res.json({ success: true, message: 'Project deleted' });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
