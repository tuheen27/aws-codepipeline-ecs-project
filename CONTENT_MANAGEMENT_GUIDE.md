# Content Management System - Getting Started Guide

## 📋 Overview

You now have a complete **Content Management System** for your portfolio with:

- ✅ **Express.js Backend** with SQLite database
- ✅ **JWT Authentication** for secure admin access
- ✅ **RESTful API** for all CRUD operations
- ✅ **Updated React Admin Panel** with real-time data saving
- ✅ **Full TypeScript Support** for type safety

---

## 🚀 Quick Start

### Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

### Step 2: Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

You should see:
```
✅ Backend server running on http://localhost:5000
📚 API Documentation:
   - POST   /api/auth/login         - Login with password
   - GET    /api/personal           - Get personal info
   - POST   /api/projects           - Create project
   - GET    /api/projects           - Get all projects
   - PUT    /api/projects/:id       - Update project
   - DELETE /api/projects/:id       - Delete project
   - GET    /api/skills             - Get all skills
   - POST   /api/skills             - Create skill
   ...
```

### Step 3: Start Frontend Server (in another terminal)

```bash
# From project root directory
npm run dev
```

### Step 4: Access Admin Panel

1. Navigate to `http://localhost:8080/admin`
2. Enter password: `admin123`
3. Start managing your content!

---

## 📁 Project Structure

### Backend (`/server`)
```
server/
├── src/
│   ├── server.js              # Main Express app
│   ├── db/
│   │   └── init.js            # Database initialization & schema
│   ├── middleware/
│   │   └── auth.js            # JWT & password authentication
│   └── routes/
│       ├── auth.js            # Authentication endpoints
│       ├── personal.js        # Personal info CRUD
│       ├── projects.js        # Projects CRUD
│       ├── skills.js          # Skills CRUD
│       ├── experience.js      # Experience CRUD
│       └── social.js          # Social links CRUD
├── .env.example               # Environment variables template
├── package.json               # Dependencies
└── README.md                  # Backend documentation
```

### Frontend (`/src`)
```
src/
├── lib/
│   ├── api.ts                 # API client for backend
│   └── portfolioData.ts       # Portfolio data types
├── pages/
│   └── Admin.tsx              # Updated admin panel (with API integration)
└── components/
    └── portfolio/
        └── AdminPanel.tsx     # Admin panel component
```

---

## 🗄️ Database Schema

The SQLite database (`portfolio.db`) includes:

### `personal_info`
```
- id, name, title, tagline, email, phone, location, bio, avatar, resumeUrl
- timestamps (created_at, updated_at)
```

### `projects`
```
- id, title, description, tags (JSON), image, liveUrl, githubUrl
- timestamps
```

### `skills`
```
- id, name, level (0-100), category, timestamps
```

### `experience`
```
- id, title, company, period, description, timestamps
```

### `social_links`
```
- id, platform (UNIQUE), url, timestamps
```

---

## 🔐 Configuration

### Backend `.env` File

Create `server/.env`:

```env
PORT=5000
ADMIN_PASSWORD=admin123
JWT_SECRET=your-secret-key-change-in-production
FRONTEND_URL=http://localhost:8080
NODE_ENV=development
```

**For Production:**
- Change `ADMIN_PASSWORD` to a strong password
- Generate a strong `JWT_SECRET` (use `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- Set `NODE_ENV=production`
- Use HTTPS and update `FRONTEND_URL`

### Frontend `.env.local`

Already created at `/.env.local`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Usage Examples

### Authenticate

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password":"admin123"}'
```

Response:
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Get All Projects

```bash
curl http://localhost:5000/api/projects
```

### Create Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "id": "proj-1",
    "title": "My Project",
    "description": "Description here",
    "tags": ["React", "TypeScript"],
    "image": "/projects/image.png",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/user/repo"
  }'
```

### Update Project

```bash
curl -X PUT http://localhost:5000/api/projects/proj-1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Updated Title",
    "description": "Updated description"
  }'
```

### Delete Project

```bash
curl -X DELETE http://localhost:5000/api/projects/proj-1 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 💾 Frontend API Client

Use the provided API client in `src/lib/api.ts`:

```typescript
import { authApi, projectsApi, personalApi, skillsApi } from '@/lib/api';

// Login
await authApi.login('admin123');

// Get projects
const projects = await projectsApi.getAll();

// Get single project
const project = await projectsApi.get('proj-1');

// Create project
await projectsApi.create({
  id: 'proj-2',
  title: 'New Project',
  description: '...',
  tags: [],
  image: '...'
});

// Update project
await projectsApi.update('proj-1', {
  title: 'Updated Title'
});

// Delete project
await projectsApi.delete('proj-1');

// Manage personal info
const personal = await personalApi.get();
await personalApi.update(id, { name: 'New Name' });

// Manage skills
const skills = await skillsApi.getAll();
await skillsApi.create({ name: 'React', level: 90, category: 'Frontend' });
```

---

## 🔑 Key Features

### Authentication Flow
1. User enters password in Admin Panel
2. Frontend calls `POST /api/auth/login`
3. Backend validates password and returns JWT token
4. Token stored in localStorage
5. All subsequent requests include token in Authorization header

### Data Persistence
- All changes are saved to SQLite database
- Database file: `portfolio.db` (auto-created in project root)
- Timestamps tracked for all records (created_at, updated_at)

### Error Handling
- Proper HTTP status codes (200, 201, 400, 401, 404, 500)
- Meaningful error messages
- Toast notifications in UI for user feedback

---

## 🧪 Testing the System

### Test Login
1. Go to `/admin`
2. Try with wrong password → See error toast
3. Try with correct password (`admin123`) → Login successful

### Test Projects CRUD
1. Click "Add Project" button
2. Fill in project details
3. Click "Save Changes"
4. Refresh page → Data persists from database
5. Delete project → Removed from database

### Test API Directly
Use Postman, Curl, or Thunder Client to test endpoints directly.

---

## 🐛 Troubleshooting

### Backend not connecting
- Check if backend is running: `http://localhost:5000/api/health`
- Verify `FRONTEND_URL` in server `.env` matches frontend URL
- Check CORS settings

### Database locked
- Only one instance can access the database
- Restart the server: `npm run dev`

### Token expired/invalid
- Login again to get a fresh token
- Token expires after 7 days (configurable)

### Port already in use
```bash
# Use different port
PORT=5001 npm run dev
```

---

## 📚 Next Steps

### 1. Customize Admin Password
```bash
# In server/.env
ADMIN_PASSWORD=your_secure_password
```

### 2. Add More Fields
Edit `server/src/db/init.js` to add columns to database tables.

### 3. Deploy to Production
- Set up proper environment variables
- Use HTTPS
- Implement database backups
- Add rate limiting for API
- Use production database (PostgreSQL recommended over SQLite)

### 4. Add Image Upload
Create a new API route to handle file uploads to images directory.

### 5. Add Email Notifications
Integrate with a service like SendGrid for contact form emails.

---

## 📖 Documentation Files

- **Backend API Docs:** [/server/README.md](/server/README.md)
- **Frontend Components:** See Admin.tsx and AdminPanel.tsx
- **Database:** See server/src/db/init.js
- **API Client:** See src/lib/api.ts

---

## 🤝 Support & Questions

For issues or questions:
1. Check the troubleshooting section above
2. Review API endpoint documentation
3. Check browser console for errors
4. Check server logs for backend errors

---

## ✨ You're All Set!

Your content management system is ready to use. Start by logging into the admin panel and managing your portfolio content!

**Happy coding! 🚀**
