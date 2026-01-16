import express from 'express';
import cors from 'cors';
import { initDatabase } from './db/init.js';

// Import routes
import authRoutes from './routes/auth.js';
import personalRoutes from './routes/personal.js';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import experienceRoutes from './routes/experience.js';
import socialRoutes from './routes/social.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// Initialize database
await initDatabase().catch(err => {
  console.error('Database initialization failed:', err);
  process.exit(1);
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/personal', personalRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/social', socialRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  console.log(`📚 API Documentation:`);
  console.log(`   - POST   /api/auth/login         - Login with password`);
  console.log(`   - GET    /api/personal           - Get personal info`);
  console.log(`   - POST   /api/projects           - Create project`);
  console.log(`   - GET    /api/projects           - Get all projects`);
  console.log(`   - PUT    /api/projects/:id       - Update project`);
  console.log(`   - DELETE /api/projects/:id       - Delete project`);
  console.log(`   - GET    /api/skills             - Get all skills`);
  console.log(`   - POST   /api/skills             - Create skill`);
  console.log(`   - PUT    /api/experience/:id     - Update experience`);
  console.log(`   - GET    /api/social             - Get social links`);
});
