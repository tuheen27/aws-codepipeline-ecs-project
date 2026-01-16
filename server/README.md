# Portfolio Backend API - SQLite Content Management

This backend server handles all content management for your portfolio admin panel.

## Features

✅ **Authentication** - JWT-based login with password protection  
✅ **Projects Management** - CRUD operations for portfolio projects  
✅ **Personal Info** - Manage name, title, bio, contact details  
✅ **Skills** - Add and organize your skills by category  
✅ **Experience** - Track work history and achievements  
✅ **Social Links** - Manage social media profiles  
✅ **SQLite Database** - Persistent data storage  

## Installation

```bash
cd server
npm install
```

## Configuration

Create a `.env` file in the server directory (copy from `.env.example`):

```bash
PORT=5000
ADMIN_PASSWORD=admin123
JWT_SECRET=your-secret-key-change-in-production
FRONTEND_URL=http://localhost:8080
NODE_ENV=development
```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- **POST** `/api/auth/login` - Login with password, returns JWT token

### Personal Information
- **GET** `/api/personal` - Get personal info
- **POST** `/api/personal` - Create personal info
- **PUT** `/api/personal/:id` - Update personal info

### Projects
- **GET** `/api/projects` - Get all projects
- **GET** `/api/projects/:id` - Get single project
- **POST** `/api/projects` - Create new project
- **PUT** `/api/projects/:id` - Update project
- **DELETE** `/api/projects/:id` - Delete project

### Skills
- **GET** `/api/skills` - Get all skills
- **POST** `/api/skills` - Create new skill
- **PUT** `/api/skills/:id` - Update skill
- **DELETE** `/api/skills/:id` - Delete skill

### Experience
- **GET** `/api/experience` - Get all experience entries
- **POST** `/api/experience` - Create new experience
- **PUT** `/api/experience/:id` - Update experience
- **DELETE** `/api/experience/:id` - Delete experience

### Social Links
- **GET** `/api/social` - Get all social links
- **PUT** `/api/social/:platform` - Update social link

## Database Schema

All data is stored in SQLite with the following tables:

- `personal_info` - Personal and contact information
- `projects` - Portfolio projects
- `skills` - Skills and expertise
- `experience` - Work experience
- `social_links` - Social media profiles
- `admin_users` - Admin user accounts

## Example Usage

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password":"admin123"}'
```

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

### Create Project (requires authentication)
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "id": "project-1",
    "title": "My Project",
    "description": "Project description",
    "tags": ["React", "TypeScript"],
    "image": "/projects/image.png",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/user/repo"
  }'
```

## Frontend Integration

The frontend uses the API client library in `src/lib/api.ts`:

```typescript
import { authApi, projectsApi } from '@/lib/api';

// Login
await authApi.login('admin123');

// Get all projects
const projects = await projectsApi.getAll();

// Create project
await projectsApi.create({...});

// Update project
await projectsApi.update(id, {...});

// Delete project
await projectsApi.delete(id);
```

## Security Notes

⚠️ **Important for Production:**

1. Change the `ADMIN_PASSWORD` in `.env`
2. Generate a strong `JWT_SECRET`
3. Implement proper password hashing (bcrypt)
4. Use HTTPS in production
5. Add rate limiting for login attempts
6. Set up CORS properly for your domain
7. Consider database backups

## Troubleshooting

### Port already in use
```bash
# Change PORT in .env or use a different port
PORT=5001 npm run dev
```

### Database locked
- Ensure only one process is accessing the database
- Restart the server if this persists

### CORS errors
- Check `FRONTEND_URL` in `.env` matches your frontend address
- Frontend must be running on the configured URL

## License

MIT
