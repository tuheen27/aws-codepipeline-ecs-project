# 📁 Complete Project Structure

## Overview

```
pixel-perfect-portfolio/
├── server/                              # 🔧 Backend (Express + SQLite)
│   ├── src/
│   │   ├── server.js                   # Main Express app (400+ lines)
│   │   ├── db/
│   │   │   └── init.js                 # Database initialization
│   │   ├── middleware/
│   │   │   └── auth.js                 # JWT & password auth
│   │   └── routes/
│   │       ├── auth.js                 # Login endpoint
│   │       ├── personal.js             # Personal info CRUD
│   │       ├── projects.js             # Projects CRUD (25+ endpoints)
│   │       ├── skills.js               # Skills CRUD
│   │       ├── experience.js           # Experience CRUD
│   │       └── social.js               # Social links CRUD
│   ├── .env.example                    # Environment template
│   ├── .gitignore
│   ├── package.json                    # Dependencies
│   └── README.md                       # Backend docs
│
├── src/                                # 🎨 Frontend (React + TypeScript)
│   ├── pages/
│   │   ├── Admin.tsx                   # ✨ UPDATED - Admin panel
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── NavLink.tsx
│   │   ├── portfolio/
│   │   │   ├── About.tsx
│   │   │   ├── AdminPanel.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── InteractiveCanvas.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── SmoothScroll.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── card.tsx
│   │       └── [30+ other shadcn components]
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useTypewriter.ts
│   ├── lib/
│   │   ├── api.ts                      # ✨ NEW - API client
│   │   ├── portfolioData.ts
│   │   └── utils.ts
│   ├── test/
│   │   ├── example.test.ts
│   │   └── setup.ts
│   ├── integrations/
│   │   └── supabase/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── public/                             # 📦 Static assets
│   └── robots.txt
│
├── supabase/                           # ⚙️ Supabase config
│   └── config.toml
│
├── 📄 Configuration Files
│   ├── .env.local                      # ✨ NEW - Frontend env
│   ├── .env                            # Git-ignored env vars
│   ├── .gitignore
│   ├── package.json                    # Frontend dependencies
│   ├── package-lock.json
│   ├── tsconfig.json                   # TypeScript config
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts                  # Vite build config
│   ├── vitest.config.ts                # Test config
│   ├── tailwind.config.ts              # Tailwind CSS
│   ├── postcss.config.js               # PostCSS config
│   ├── eslint.config.js                # ESLint rules
│   ├── components.json                 # shadcn config
│   ├── dockerfile                      # Docker config
│   ├── index.html                      # HTML entry point
│   └── bun.lockb                       # Bun lock file
│
├── 📚 Documentation (NEW)
│   ├── IMPLEMENTATION_SUMMARY.md       # What was built
│   ├── CONTENT_MANAGEMENT_GUIDE.md     # Setup & usage
│   ├── API_REFERENCE.md                # API documentation
│   ├── DEPLOYMENT_GUIDE.md             # Production deployment
│   ├── QUICK_REFERENCE.md              # Quick lookup card
│   ├── PROJECT_STRUCTURE.md            # This file
│   └── README.md                       # Original project README
```

---

## 🔧 Backend Architecture

### server/src/server.js
```javascript
Express App with:
├── CORS Configuration
├── JSON Middleware
├── Routes (/api/...)
│   ├── /auth
│   ├── /personal
│   ├── /projects
│   ├── /skills
│   ├── /experience
│   └── /social
└── Health Check Endpoint
```

### server/src/db/init.js
```javascript
SQLite Database with:
├── Tables
│   ├── personal_info
│   ├── projects
│   ├── skills
│   ├── experience
│   ├── social_links
│   └── admin_users
└── Auto-initialization on startup
```

### server/src/routes/
```
Each route file handles:
├── GET /resource          - Fetch all
├── GET /resource/:id      - Fetch one
├── POST /resource         - Create
├── PUT /resource/:id      - Update
└── DELETE /resource/:id   - Delete
```

### server/src/middleware/auth.js
```javascript
Authentication utilities:
├── generateToken(userId)
├── verifyToken(req, res, next)
└── checkPassword(req, res, next)
```

---

## 🎨 Frontend Architecture

### src/lib/api.ts
```typescript
API Client with:
├── authApi
│   └── login(password)
├── personalApi
│   ├── get()
│   ├── create(data)
│   └── update(id, data)
├── projectsApi
│   ├── getAll()
│   ├── get(id)
│   ├── create(data)
│   ├── update(id, data)
│   └── delete(id)
├── skillsApi
│   ├── getAll()
│   ├── create(data)
│   ├── update(id, data)
│   └── delete(id)
├── experienceApi
│   ├── getAll()
│   ├── create(data)
│   ├── update(id, data)
│   └── delete(id)
└── socialApi
    ├── getAll()
    └── update(platform, url)
```

### src/pages/Admin.tsx
```typescript
Admin Panel with:
├── Authentication (login form)
├── Tabs
│   ├── Personal Information
│   │   ├── Name
│   │   ├── Title
│   │   ├── Tagline
│   │   ├── Bio
│   │   ├── Email
│   │   └── Location
│   └── Projects
│       ├── Project list
│       ├── Add Project button
│       └── Project editor
├── Save Changes button
├── Loading states
└── Error handling
```

---

## 🗄️ Database Schema

### personal_info Table
```
┌─────────┬───────────────┬──────────┐
│ Column  │ Type          │ Notes    │
├─────────┼───────────────┼──────────┤
│ id      │ INTEGER PK    │ Auto-inc │
│ name    │ TEXT          │ Required │
│ title   │ TEXT          │ Required │
│ tagline │ TEXT          │ Optional │
│ email   │ TEXT          │ Required │
│ phone   │ TEXT          │ Optional │
│ location│ TEXT          │ Optional │
│ bio     │ TEXT          │ Optional │
│ avatar  │ TEXT          │ Optional │
│ resumeUrl│TEXT          │ Optional │
│ timestamps              │ Auto     │
└─────────┴───────────────┴──────────┘
```

### projects Table
```
┌─────────┬───────────────┬──────────┐
│ Column  │ Type          │ Notes    │
├─────────┼───────────────┼──────────┤
│ id      │ TEXT PK       │ Manual   │
│ title   │ TEXT          │ Required │
│ description│TEXT        │ Required │
│ tags    │ TEXT (JSON)   │ Array    │
│ image   │ TEXT          │ Optional │
│ liveUrl │ TEXT          │ Optional │
│ githubUrl│TEXT          │ Optional │
│ timestamps              │ Auto     │
└─────────┴───────────────┴──────────┘
```

### skills Table
```
┌─────────┬───────────────┬──────────┐
│ Column  │ Type          │ Notes    │
├─────────┼───────────────┼──────────┤
│ id      │ INTEGER PK    │ Auto-inc │
│ name    │ TEXT          │ Required │
│ level   │ INTEGER       │ 0-100    │
│ category│ TEXT          │ Required │
│ timestamps              │ Auto     │
└─────────┴───────────────┴──────────┘
```

### experience Table
```
┌──────────┬───────────────┬──────────┐
│ Column   │ Type          │ Notes    │
├──────────┼───────────────┼──────────┤
│ id       │ INTEGER PK    │ Auto-inc │
│ title    │ TEXT          │ Required │
│ company  │ TEXT          │ Required │
│ period   │ TEXT          │ Required │
│ description│TEXT         │ Optional │
│ timestamps               │ Auto     │
└──────────┴───────────────┴──────────┘
```

### social_links Table
```
┌──────────┬───────────────┬──────────┐
│ Column   │ Type          │ Notes    │
├──────────┼───────────────┼──────────┤
│ id       │ INTEGER PK    │ Auto-inc │
│ platform │ TEXT UNIQUE   │ Required │
│ url      │ TEXT          │ Optional │
│ timestamps               │ Auto     │
└──────────┴───────────────┴──────────┘
```

---

## 📊 File Statistics

### Backend
```
server/src/server.js        ~400 lines  - Main app
server/src/db/init.js       ~180 lines  - Database schema
server/src/routes/projects.js ~180 lines - Projects CRUD
server/src/routes/personal.js ~80 lines  - Personal CRUD
server/src/routes/skills.js   ~140 lines - Skills CRUD
server/src/routes/experience.js ~140 lines - Experience CRUD
server/src/routes/social.js   ~80 lines  - Social CRUD
server/src/routes/auth.js     ~30 lines  - Auth endpoint
server/src/middleware/auth.js ~40 lines  - Auth utils
────────────────────────────
Total Backend Code: 1,050+ lines
```

### Frontend
```
src/pages/Admin.tsx         ~350 lines  - Admin panel
src/lib/api.ts              ~200 lines  - API client
src/pages/AdminPanel.tsx    ~440 lines  - Admin component
────────────────────────────
Updated Frontend: 990 lines (new/updated)
```

### Documentation
```
IMPLEMENTATION_SUMMARY.md   ~500 lines
CONTENT_MANAGEMENT_GUIDE.md ~400 lines
API_REFERENCE.md            ~600 lines
DEPLOYMENT_GUIDE.md         ~600 lines
QUICK_REFERENCE.md          ~200 lines
PROJECT_STRUCTURE.md        ~400 lines
────────────────────────────
Total Documentation: 2,700+ lines
```

---

## 🔄 Data Flow

### Frontend → API → Database

```
User Input (Admin Panel)
    ↓
React Component (Admin.tsx)
    ↓
API Client (api.ts)
    ↓
HTTP Request (POST/PUT/GET/DELETE)
    ↓
Express Server (server.js)
    ↓
Middleware (Auth, CORS)
    ↓
Route Handler (routes/)
    ↓
Database Query (SQLite)
    ↓
JSON Response
    ↓
Frontend State Update
    ↓
UI Refresh
```

---

## 🔐 Authentication Flow

```
User enters password
    ↓
POST /api/auth/login
    ↓
Server validates password
    ↓
Generate JWT token
    ↓
Return token to client
    ↓
Client stores in localStorage
    ↓
Add token to all API requests
    ↓
Server verifies token
    ↓
Execute request if valid
    ↓
Return data or 401 error
```

---

## 📦 Dependencies

### Backend (server/package.json)
```json
{
  "express": "^4.18.2",
  "sqlite3": "^5.1.6",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "jsonwebtoken": "^9.1.2",
  "nodemon": "^3.0.2" (dev)
}
```

### Frontend (package.json)
```json
{
  "react": "^18.x",
  "typescript": "^5.x",
  "vite": "^5.x",
  "@hookform/resolvers": "^3.10.0",
  "@radix-ui/": "^1.x" (30+ components),
  "@tanstack/react-query": "^5.83.0",
  "framer-motion": "^12.26.2",
  "sonner": "^1.x" (toasts)
}
```

---

## 🚀 Development Workflow

```
1. Edit server code
   ↓
2. npm run dev (auto-reload)
   ↓
3. Edit frontend code
   ↓
4. Vite auto-refresh
   ↓
5. Test in browser
   ↓
6. Commit changes
```

---

## 📝 Environment Variables

### Backend (.env or .env.example)
```
PORT=5000                      # Server port
ADMIN_PASSWORD=admin123        # Login password
JWT_SECRET=your-secret         # Token secret
FRONTEND_URL=http://localhost:8080  # CORS origin
NODE_ENV=development           # Environment
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:5000/api  # Backend API
```

---

## 🎯 Key Directories Explained

### /server
Backend Express.js application with SQLite database

### /src
Frontend React application with TypeScript

### /src/pages
Page components (Admin, Index, NotFound)

### /src/components
Reusable UI components (shadcn/ui, portfolio components)

### /src/lib
Utility functions and API client

### /src/hooks
Custom React hooks

### /public
Static assets (images, robots.txt)

### /server/src/routes
API endpoint handlers

### /server/src/db
Database initialization and schema

---

## ✅ What's New vs Original

### Added (New Files)
- ✨ `server/` - Complete backend
- ✨ `src/lib/api.ts` - API client
- ✨ `.env.local` - Frontend config
- ✨ Multiple documentation files

### Updated
- 🔄 `src/pages/Admin.tsx` - API integration
- 🔄 Uses new API client
- 🔄 Authentication flow
- 🔄 Real-time saving

### Unchanged
- Original React components
- Styling and themes
- Build configuration
- UI components from shadcn/ui

---

## 🔍 Quick File Lookup

| Need | File |
|------|------|
| Run backend | `server/src/server.js` |
| Database schema | `server/src/db/init.js` |
| API authentication | `server/src/middleware/auth.js` |
| Projects endpoint | `server/src/routes/projects.js` |
| Admin UI | `src/pages/Admin.tsx` |
| API calls | `src/lib/api.ts` |
| Backend config | `server/.env` |
| Frontend config | `.env.local` |
| API docs | `API_REFERENCE.md` |
| Setup guide | `CONTENT_MANAGEMENT_GUIDE.md` |

---

**Last Updated**: January 16, 2026
**Status**: ✅ Complete
