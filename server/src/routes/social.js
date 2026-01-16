import express from 'express';
import { getDatabase } from '../db/init.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/social
 * Get all social links
 */
router.get('/', async (req, res) => {
  try {
    const db = await getDatabase();
    db.all('SELECT * FROM social_links', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        const social = {};
        rows?.forEach(row => {
          social[row.platform] = row.url;
        });
        res.json(social);
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * PUT /api/social/:platform
 * Update social link
 */
router.put('/:platform', verifyToken, async (req, res) => {
  try {
    const { platform } = req.params;
    const { url } = req.body;

    const db = await getDatabase();
    const query = `
      INSERT INTO social_links (platform, url)
      VALUES (?, ?)
      ON CONFLICT(platform) DO UPDATE SET url = excluded.url, updated_at = CURRENT_TIMESTAMP
    `;

    db.run(query, [platform, url], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ success: true });
      }
      db.close();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
