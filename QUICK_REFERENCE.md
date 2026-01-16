# ⚡ Quick Reference Card

## 🚀 Start the System

```bash
# Terminal 1: Backend
cd server
npm install
npm run dev

# Terminal 2: Frontend  
npm run dev

# Then visit: http://localhost:8080/admin
# Password: admin123
```

---

## 📍 Key URLs

| Component | URL |
|-----------|-----|
| Frontend | http://localhost:8080 |
| Admin Panel | http://localhost:8080/admin |
| Backend API | http://localhost:5000/api |
| API Health | http://localhost:5000/api/health |

---

## 🗂️ Important Files

| Purpose | Location |
|---------|----------|
| Backend Config | `server/.env` |
| Frontend Config | `.env.local` |
| Database | `portfolio.db` (auto-created) |
| API Routes | `server/src/routes/` |
| Frontend Calls | `src/lib/api.ts` |
| Admin UI | `src/pages/Admin.tsx` |

---

## 🔧 Environment Variables

### Backend (`server/.env`)
```
PORT=5000
ADMIN_PASSWORD=admin123
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:8080
NODE_ENV=development
```

### Frontend (`.env.local`)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 Common API Calls

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

### Create Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"id":"1","title":"My Project","description":"...","tags":[]}'
```

### Update Project
```bash
curl -X PUT http://localhost:5000/api/projects/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"title":"New Title"}'
```

### Delete Project
```bash
curl -X DELETE http://localhost:5000/api/projects/1 \
  -H "Authorization: Bearer TOKEN"
```

---

## 🎯 Available Endpoints

### Auth
- `POST /api/auth/login`

### Projects
- `GET /api/projects`
- `GET /api/projects/:id`
- `POST /api/projects` 🔒
- `PUT /api/projects/:id` 🔒
- `DELETE /api/projects/:id` 🔒

### Personal
- `GET /api/personal`
- `POST /api/personal` 🔒
- `PUT /api/personal/:id` 🔒

### Skills
- `GET /api/skills`
- `POST /api/skills` 🔒
- `PUT /api/skills/:id` 🔒
- `DELETE /api/skills/:id` 🔒

### Experience
- `GET /api/experience`
- `POST /api/experience` 🔒
- `PUT /api/experience/:id` 🔒
- `DELETE /api/experience/:id` 🔒

### Social
- `GET /api/social`
- `PUT /api/social/:platform` 🔒

🔒 = Requires authentication

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Change PORT in `server/.env` |
| Can't login | Verify password in `server/.env` |
| API not responding | Check if backend is running on port 5000 |
| CORS error | Check FRONTEND_URL in `server/.env` |
| Data not saving | Check browser console for errors |
| Database locked | Restart backend server |

---

## 📚 Documentation

- **Setup**: [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
- **API Docs**: [API_REFERENCE.md](./API_REFERENCE.md)
- **Deploy**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Backend**: [server/README.md](./server/README.md)

---

## 🛠️ Useful npm Commands

```bash
# Backend
cd server
npm install          # Install dependencies
npm run dev         # Start with auto-reload
npm start           # Start production

# Frontend
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Check code style
npm run test        # Run tests
```

---

## 🔐 Default Credentials

| Item | Value |
|------|-------|
| Admin Password | `admin123` |
| JWT Expiry | 7 days |
| Default Port | 5000 |

⚠️ **Change password in production!**

---

## 📊 Database Tables

- `personal_info` - Personal data
- `projects` - Portfolio projects
- `skills` - Skills list
- `experience` - Work history
- `social_links` - Social profiles
- `admin_users` - Admin accounts

---

## ✅ Testing Checklist

- [ ] Backend runs: `npm run dev`
- [ ] Frontend runs: `npm run dev`
- [ ] Admin accessible: `http://localhost:8080/admin`
- [ ] Can login with `admin123`
- [ ] Can view projects
- [ ] Can add project
- [ ] Can edit project
- [ ] Can delete project
- [ ] Data persists on refresh
- [ ] API health check works

---

## 🚀 Deployment Quick Links

- [Heroku Guide](./DEPLOYMENT_GUIDE.md#option-1-heroku)
- [Docker Guide](./DEPLOYMENT_GUIDE.md#option-2-docker--vpscloud)
- [AWS Guide](./DEPLOYMENT_GUIDE.md#option-3-aws-deployment)
- [Render Guide](./DEPLOYMENT_GUIDE.md#option-4-rendercom)

---

## 💡 Pro Tips

1. **Save token after login**: Automatically done in localStorage
2. **Batch operations**: Save all changes at once
3. **Use TypeScript**: For better type safety in API calls
4. **Enable logging**: Add Winston for production monitoring
5. **Database backups**: Automated daily backups recommended

---

## 📞 Getting Help

1. Check [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
2. Review [API_REFERENCE.md](./API_REFERENCE.md)
3. Check browser console for errors
4. Check server logs: `npm run dev` output
5. Test API directly with curl/Postman

---

**Last Updated**: January 16, 2026
**Status**: ✅ Production Ready
