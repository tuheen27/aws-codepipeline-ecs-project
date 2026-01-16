# API Reference - Content Management System

## Base URL
```
http://localhost:5000/api
```

## Authentication

All endpoints marked with 🔒 require authentication.

**How to authenticate:**
1. Call `/auth/login` with your password
2. Get JWT token from response
3. Include token in header: `Authorization: Bearer YOUR_TOKEN`

---

## Endpoints

### 🔐 Authentication

#### POST `/auth/login`
Login to get JWT token for authenticated requests.

**Request:**
```json
{
  "password": "admin123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Logged in successfully"
}
```

**Error (401):**
```json
{
  "error": "Invalid password"
}
```

---

### 👤 Personal Information

#### GET `/personal`
Get personal information (no auth required).

**Response (200):**
```json
{
  "id": 1,
  "name": "Alex Rivera",
  "title": "Full-Stack Developer",
  "tagline": "Crafting digital experiences",
  "email": "hello@example.com",
  "phone": "+1 (555) 123-4567",
  "location": "San Francisco, CA",
  "bio": "Passionate developer with...",
  "avatar": "/avatar.png",
  "resumeUrl": "/resume.pdf",
  "created_at": "2024-01-16T10:00:00.000Z",
  "updated_at": "2024-01-16T10:00:00.000Z"
}
```

#### POST `/personal` 🔒
Create personal information.

**Request:**
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "email": "your@email.com",
  "phone": "+1 (555) 123-4567",
  "location": "City, State",
  "bio": "Your bio",
  "avatar": "/path/to/avatar.png",
  "resumeUrl": "/path/to/resume.pdf"
}
```

**Response (200):**
```json
{
  "success": true,
  "id": 1
}
```

#### PUT `/personal/:id` 🔒
Update personal information.

**Request:**
```json
{
  "name": "Updated Name",
  "title": "Updated Title"
}
```

**Response (200):**
```json
{
  "success": true,
  "changes": 1
}
```

---

### 📁 Projects

#### GET `/projects`
Get all projects (no auth required).

**Response (200):**
```json
[
  {
    "id": "1",
    "title": "FinFlow Dashboard",
    "description": "Financial analytics dashboard...",
    "tags": ["React", "TypeScript", "D3.js"],
    "image": "/projects/finflow.png",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com/user/repo",
    "created_at": "2024-01-16T10:00:00.000Z",
    "updated_at": "2024-01-16T10:00:00.000Z"
  }
]
```

#### GET `/projects/:id`
Get single project (no auth required).

**Response (200):**
```json
{
  "id": "1",
  "title": "FinFlow Dashboard",
  "description": "Financial analytics dashboard...",
  "tags": ["React", "TypeScript", "D3.js"],
  "image": "/projects/finflow.png",
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/user/repo",
  "created_at": "2024-01-16T10:00:00.000Z",
  "updated_at": "2024-01-16T10:00:00.000Z"
}
```

**Error (404):**
```json
{
  "error": "Project not found"
}
```

#### POST `/projects` 🔒
Create new project.

**Request:**
```json
{
  "id": "proj-2",
  "title": "New Project",
  "description": "Project description",
  "tags": ["React", "Node.js"],
  "image": "/projects/image.png",
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/user/repo"
}
```

**Response (200):**
```json
{
  "success": true,
  "id": "proj-2"
}
```

**Error (400):**
```json
{
  "error": "Missing required fields: id, title, description"
}
```

#### PUT `/projects/:id` 🔒
Update project.

**Request:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "tags": ["React", "TypeScript"],
  "liveUrl": "https://new-url.com"
}
```

**Response (200):**
```json
{
  "success": true,
  "changes": 1
}
```

**Error (404):**
```json
{
  "error": "Project not found"
}
```

#### DELETE `/projects/:id` 🔒
Delete project.

**Response (200):**
```json
{
  "success": true,
  "message": "Project deleted"
}
```

**Error (404):**
```json
{
  "error": "Project not found"
}
```

---

### 🎯 Skills

#### GET `/skills`
Get all skills (no auth required).

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "React",
    "level": 95,
    "category": "Frontend",
    "created_at": "2024-01-16T10:00:00.000Z",
    "updated_at": "2024-01-16T10:00:00.000Z"
  },
  {
    "id": 2,
    "name": "Node.js",
    "level": 90,
    "category": "Backend",
    "created_at": "2024-01-16T10:00:00.000Z",
    "updated_at": "2024-01-16T10:00:00.000Z"
  }
]
```

#### POST `/skills` 🔒
Create new skill.

**Request:**
```json
{
  "name": "TypeScript",
  "level": 92,
  "category": "Languages"
}
```

**Response (200):**
```json
{
  "success": true,
  "id": 3
}
```

#### PUT `/skills/:id` 🔒
Update skill.

**Request:**
```json
{
  "name": "TypeScript",
  "level": 95,
  "category": "Languages"
}
```

**Response (200):**
```json
{
  "success": true,
  "changes": 1
}
```

#### DELETE `/skills/:id` 🔒
Delete skill.

**Response (200):**
```json
{
  "success": true,
  "message": "Skill deleted"
}
```

---

### 💼 Experience

#### GET `/experience`
Get all experience entries (no auth required).

**Response (200):**
```json
[
  {
    "id": 1,
    "title": "Senior Developer",
    "company": "Tech Company",
    "period": "2022-Present",
    "description": "Leading frontend team...",
    "created_at": "2024-01-16T10:00:00.000Z",
    "updated_at": "2024-01-16T10:00:00.000Z"
  }
]
```

#### POST `/experience` 🔒
Create new experience entry.

**Request:**
```json
{
  "title": "Full-Stack Developer",
  "company": "StartUp Inc",
  "period": "2020-2022",
  "description": "Built web applications..."
}
```

**Response (200):**
```json
{
  "success": true,
  "id": 2
}
```

#### PUT `/experience/:id` 🔒
Update experience entry.

**Request:**
```json
{
  "title": "Senior Full-Stack Developer",
  "description": "Updated description..."
}
```

**Response (200):**
```json
{
  "success": true,
  "changes": 1
}
```

#### DELETE `/experience/:id` 🔒
Delete experience entry.

**Response (200):**
```json
{
  "success": true,
  "message": "Experience deleted"
}
```

---

### 🔗 Social Links

#### GET `/social`
Get all social links (no auth required).

**Response (200):**
```json
{
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
  "twitter": "https://twitter.com/username",
  "dribbble": "https://dribbble.com/username"
}
```

#### PUT `/social/:platform` 🔒
Update social link.

**Request:**
```json
{
  "url": "https://github.com/newusername"
}
```

**Response (200):**
```json
{
  "success": true
}
```

---

### 🏥 Health Check

#### GET `/health`
Check if server is running (no auth required).

**Response (200):**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| `200` | Success |
| `201` | Created |
| `400` | Bad Request (missing/invalid fields) |
| `401` | Unauthorized (missing/invalid token) |
| `404` | Not Found |
| `500` | Server Error |

---

## Error Response Format

All errors follow this format:

```json
{
  "error": "Error description"
}
```

---

## Request Examples

### Using cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password":"admin123"}'

# Get all projects
curl http://localhost:5000/api/projects

# Create project (requires token)
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "id": "proj-1",
    "title": "My Project",
    "description": "Description",
    "tags": ["React"],
    "image": "/image.png"
  }'

# Update project
curl -X PUT http://localhost:5000/api/projects/proj-1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title": "Updated Title"}'

# Delete project
curl -X DELETE http://localhost:5000/api/projects/proj-1 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Using JavaScript/TypeScript

```typescript
// Imported from src/lib/api.ts
import { authApi, projectsApi } from '@/lib/api';

// Login
const loginResponse = await authApi.login('admin123');

// Get projects
const projects = await projectsApi.getAll();

// Create project
await projectsApi.create({
  id: 'proj-2',
  title: 'My Project',
  description: 'Description',
  tags: ['React', 'TypeScript'],
  image: '/image.png'
});

// Update project
await projectsApi.update('proj-2', {
  title: 'Updated Title'
});

// Delete project
await projectsApi.delete('proj-2');
```

---

## Rate Limiting

Currently, there is no rate limiting configured. For production, add rate limiting middleware to prevent abuse:

```bash
npm install express-rate-limit
```

---

## CORS Configuration

The server is configured to accept requests from:
- Frontend URL specified in `FRONTEND_URL` environment variable (default: http://localhost:8080)

To allow other origins, update the CORS configuration in `server/src/server.js`.

---

## Token Expiration

- JWT tokens expire after **7 days**
- Users must login again to get a new token
- To change expiration, modify `server/src/middleware/auth.js`

---

## Database Queries

All database operations are optimized with proper indexing. Main tables:
- `personal_info` - Indexed on `id`
- `projects` - Indexed on `id`
- `skills` - Indexed on `id, category`
- `experience` - Indexed on `id`
- `social_links` - Indexed on `platform` (UNIQUE)

---

## Need Help?

See [CONTENT_MANAGEMENT_GUIDE.md](CONTENT_MANAGEMENT_GUIDE.md) for setup instructions and troubleshooting.
