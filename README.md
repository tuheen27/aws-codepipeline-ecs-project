# Pixel Perfect Portfolio

A modern, full-stack portfolio application built with React, Express.js, and AWS infrastructure. Features a beautiful interactive frontend with admin panel capabilities and a robust backend API for managing portfolio content.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/node.js-18-brightgreen)
![React](https://img.shields.io/badge/react-18-61dafb)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Docker Support](#docker-support)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Frontend
- 🎨 **Responsive Design** - Mobile-first, fully responsive UI
- 🌙 **Dark/Light Mode** - Theme toggle with persistent storage
- ✏️ **Typewriter Animation** - Engaging hero section text effect
- 🎬 **Smooth Animations** - Framer Motion for fluid transitions
- 📱 **Interactive Canvas** - Custom canvas-based graphics
- 🎯 **Component Library** - 40+ pre-built shadcn/ui components
- ⚡ **Fast Performance** - Vite build system, optimized bundles

### Backend
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📝 **CRUD Operations** - Full Create, Read, Update, Delete for all resources
- 🗄️ **SQLite Database** - Lightweight, file-based persistence
- 📊 **RESTful API** - 25+ endpoints across 6 resource types
- 🔒 **CORS Enabled** - Secure cross-origin requests
- 📝 **Comprehensive Logging** - Request/response logging

### DevOps
- 🐳 **Docker Support** - Multi-stage builds for optimization
- 🔄 **Docker Compose** - Local development orchestration
- 🏗️ **CI/CD Pipeline** - AWS CodePipeline with 5 stages
- 🛡️ **Security Scanning** - Automated vulnerability scanning
- 📊 **CloudWatch Monitoring** - Comprehensive logging and monitoring
- 🌍 **Multi-Environment** - Dev, staging, and production support

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript 5+** - Type safety
- **Vite 5+** - Build tool
- **Tailwind CSS 3+** - Utility-first styling
- **Framer Motion 12+** - Animation library
- **shadcn/ui** - Pre-built UI components
- **React Router 6+** - Client-side routing
- **TanStack React Query 5+** - Server state management
- **React Hook Form** - Form validation
- **Zod** - Schema validation

### Backend
- **Node.js 18 LTS** - Runtime
- **Express.js 4.18+** - Web framework
- **SQLite3 5.1+** - Database
- **JWT 9.1+** - Authentication
- **CORS 2.8+** - Cross-origin handling
- **dotenv 16+** - Environment configuration
- **Nodemon** - Development hot reload

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **AWS CodePipeline** - CI/CD orchestration
- **AWS CodeBuild** - Build automation
- **AWS ECR** - Container registry
- **AWS ECS** - Container orchestration
- **AWS CloudFormation** - Infrastructure as Code
- **CloudWatch** - Logging and monitoring

## 📁 Project Structure

```
pixel-perfect-portfolio/
├── frontend/                          # React application
│   ├── src/
│   │   ├── App.tsx                   # Root component
│   │   ├── main.tsx                  # Entry point
│   │   ├── portfolio/                # Portfolio components
│   │   │   ├── Header.tsx            # Navigation header
│   │   │   ├── Hero.tsx              # Hero section
│   │   │   ├── Projects.tsx          # Projects showcase
│   │   │   ├── AdminPanel.tsx        # Admin CRUD interface
│   │   │   ├── Contact.tsx           # Contact section
│   │   │   ├── Footer.tsx            # Footer
│   │   │   └── ...                   # Other components
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── contexts/                 # React contexts
│   │   ├── hooks/                    # Custom hooks
│   │   └── lib/                      # Utilities and helpers
│   ├── public/                       # Static assets
│   ├── Dockerfile                    # Frontend Docker image
│   ├── vite.config.ts               # Vite configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   └── package.json                 # Dependencies
│
├── server/                           # Express application
│   ├── src/
│   │   ├── server.js                # Express entry point
│   │   ├── routes/                  # API routes
│   │   │   ├── auth.js              # Authentication
│   │   │   ├── personal.js          # Personal info CRUD
│   │   │   ├── projects.js          # Projects CRUD
│   │   │   ├── skills.js            # Skills CRUD
│   │   │   ├── experience.js        # Experience CRUD
│   │   │   └── social.js            # Social links CRUD
│   │   ├── middleware/              # Express middleware
│   │   │   └── auth.js              # JWT verification
│   │   └── db/                      # Database
│   │       └── init.js              # Schema initialization
│   └── package.json                 # Dependencies
│
├── buildspec.yml                    # AWS CodeBuild specification
├── docker-compose.yml               # Local development setup
├── aws-pipeline.yml                 # CloudFormation pipeline template
└── aws-ecs-deploy.yml              # ECS deployment template
```

## 📋 Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **Docker** - [Download](https://www.docker.com/products/docker-desktop)
- **Git** - [Download](https://git-scm.com/)
- **AWS Account** - For deployment (optional for local development)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/pixel-perfect-portfolio.git
cd pixel-perfect-portfolio
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

### 3. Backend Setup

```bash
cd ../server
npm install
```

## 🏃 Running Locally

### Option 1: Docker Compose (Recommended)

```bash
# From project root
docker-compose up --build

# Frontend will be at http://localhost:8080
# Backend will be at http://localhost:5000
```

### Option 2: Manual Setup

**Terminal 1 - Backend:**
```bash
cd server
npm start
# Backend runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### Option 3: Development Mode with Hot Reload

**Backend:**
```bash
cd server
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```

## 📚 API Documentation

The backend exposes a comprehensive REST API with 25+ endpoints across 6 resource types:

### API Endpoints Summary

| Resource | Endpoints | Methods |
|----------|-----------|---------|
| **Auth** | `/api/auth/login` | POST |
| **Personal** | `/api/personal/*` | GET, POST, PUT, DELETE |
| **Projects** | `/api/projects/*` | GET, POST, PUT, DELETE |
| **Skills** | `/api/skills/*` | GET, POST, PUT, DELETE |
| **Experience** | `/api/experience/*` | GET, POST, PUT, DELETE |
| **Social Links** | `/api/social/*` | GET, POST, PUT, DELETE |

**Full API documentation:** See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)

### Example Request

```bash
# Get all projects
curl http://localhost:5000/api/projects

# Create new project (requires authentication)
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "technologies": ["React", "Node.js"]
  }'
```

## 🌐 Deployment

### AWS Deployment with CodePipeline

#### Prerequisites
- AWS Account with appropriate permissions
- GitHub account with repository access
- GitHub Personal Access Token

#### Quick Start

```bash
# 1. Set parameters
aws cloudformation create-stack \
  --stack-name pixel-perfect-pipeline \
  --template-body file://aws-pipeline.yml \
  --parameters \
    ParameterKey=GitHubToken,ParameterValue=YOUR_GITHUB_TOKEN \
    ParameterKey=EnvironmentName,ParameterValue=dev \
  --capabilities CAPABILITY_NAMED_IAM \
  --region ap-south-1

# 2. Deploy to ECS
aws cloudformation create-stack \
  --stack-name pixel-perfect-ecs \
  --template-body file://aws-ecs-deploy.yml \
  --capabilities CAPABILITY_NAMED_IAM \
  --region ap-south-1
```

**Detailed deployment guide:** See [PIPELINE_DEPLOYMENT_GUIDE.md](./PIPELINE_DEPLOYMENT_GUIDE.md)

## 🔐 Environment Variables

### Frontend (.env.local)

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Pixel Perfect Portfolio
VITE_THEME_MODE=system
```

### Backend (.env)

```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-secret-key-here
JWT_EXPIRY=7d
CORS_ORIGIN=http://localhost:5173
DATABASE_PATH=./portfolio.db
```

## 🐳 Docker Support

### Build Docker Images

```bash
# Frontend image
docker build -t pixel-perfect/frontend -f frontend/dockerfile ./frontend

# Backend image
docker build -t pixel-perfect/backend -f server/Dockerfile ./server
```

### Run with Docker Compose

```bash
docker-compose up -d
docker-compose logs -f
```

### Push to AWS ECR

```bash
# Login to ECR
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin 744709874293.dkr.ecr.ap-south-1.amazonaws.com

# Tag image
docker tag pixel-perfect/frontend:latest \
  744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs:latest

# Push to ECR
docker push 744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs:latest
```

## 🧪 Testing

### Frontend Tests

```bash
cd frontend
npm run test
npm run test:coverage
```

### Backend Tests

```bash
cd server
npm run test
```

### Linting

```bash
# Frontend
cd frontend
npm run lint

# Backend
cd server
npm run lint
```

## 📊 Database Schema

The application uses SQLite3 with 6 tables:

- **personal_info** - Portfolio owner information
- **projects** - Project showcase data
- **skills** - Technical skills
- **experience** - Work experience
- **social_links** - Social media links
- **admin_users** - Admin authentication

All tables include `created_at` and `updated_at` timestamps for audit trails.

## 🔍 Architecture

For detailed architecture information, including system diagrams, data flow, and component relationships, see [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📖 Additional Documentation

- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete project reference
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick lookup guide
- **[PIPELINE_DEPLOYMENT_GUIDE.md](./PIPELINE_DEPLOYMENT_GUIDE.md)** - Deployment instructions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Commit Message Guidelines

```
type(scope): subject

feat(frontend): add dark mode toggle
fix(api): handle null project description
docs(readme): update installation steps
style(css): format tailwind classes
refactor(auth): simplify JWT validation
test(backend): add auth middleware tests
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find and kill process on port 5000
lsof -ti:5000 | xargs kill -9

# For Docker
docker-compose down
docker system prune -f
```

### Database Errors

```bash
# Reset database
rm server/portfolio.db
npm run db:init
```

### Docker Build Failures

```bash
# Clear Docker cache and rebuild
docker system prune -a --volumes
docker-compose up --build
```

For more troubleshooting, see [QUICK_REFERENCE.md](./QUICK_REFERENCE.md#troubleshooting)

## 📞 Support

- 📧 Email: your-email@example.com
- 🐙 GitHub Issues: [Open an issue](https://github.com/yourusername/pixel-perfect-portfolio/issues)
- 📚 Documentation: [See docs folder](./docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [React](https://react.dev/) - UI library
- [Express.js](https://expressjs.com/) - Web framework

## 📈 Roadmap

- [ ] Add blog/articles section
- [ ] Implement user comments on projects
- [ ] Add portfolio analytics dashboard
- [ ] Social authentication (GitHub, Google)
- [ ] Newsletter subscription
- [ ] Search functionality
- [ ] Multi-language support

---

**Last Updated:** January 2026  
**Maintainers:** [Your Name/Team]  
**Repository:** [GitHub Link]
