# Pixel Perfect Portfolio

A modern, full-stack portfolio web application built with **React 18** and **TypeScript**, featuring a beautiful, interactive frontend with smooth animations and dark mode support. The application showcases portfolio projects, skills, experience, and provides contact information with a responsive design optimized for all devices.

Built for **production-ready deployment** on AWS with automated CI/CD pipeline using CodePipeline, CodeBuild, and ECR.

![React](https://img.shields.io/badge/react-18.3.1-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.4.17-06b6d4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/vite-5.4.19-646cff?logo=vite)
![Node.js](https://img.shields.io/badge/node.js-18-brightgreen?logo=node.js)
![Docker](https://img.shields.io/badge/docker-deployed-2496ed?logo=docker)
![AWS](https://img.shields.io/badge/aws-codepipeline-FF9900?logo=amazonaws)

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

### 🎨 Frontend Features
- **Responsive Design** - Mobile-first, fully responsive UI that works seamlessly on all devices
- **Dark/Light Mode** - Theme toggle with persistent storage using localStorage
- **Smooth Animations** - Framer Motion animations for engaging user experience (12.26.2+)
- **Interactive Canvas** - Custom interactive graphics and animations
- **TypeScript Support** - Fully typed React application for type safety
- **40+ UI Components** - Pre-built shadcn/ui components powered by Radix UI
- **Vite Build System** - Lightning-fast development and production builds
- **Responsive Navigation** - Fixed navigation with smooth scroll behavior
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets

### 📄 Portfolio Sections
- **Hero Section** - Eye-catching landing area with animated text
- **About Section** - Professional introduction and background
- **Projects Showcase** - Interactive project cards with details and links
- **Skills Section** - Technical skills and competencies
- **Experience Timeline** - Work experience and education
- **Contact Section** - Call-to-action and contact information
- **Footer** - Social media links and footer information

### 🏗️ Technical Features
- **TanStack React Query 5.83+** - Server state management and data fetching
- **React Router 6.30+** - Client-side routing with nested routes
- **React Hook Form** - Efficient form handling and validation
- **Zod Schema Validation** - Runtime schema validation
- **Next Themes** - Theme management for dark/light mode
- **Lucide React Icons** - Modern SVG icon library
- **Recharts** - Interactive charts and data visualization

### 🚀 DevOps & Deployment
- **Docker Support** - Multi-stage Docker build for optimized container images
- **Docker Compose** - Local development with orchestrated services
- **AWS CodePipeline** - Automated CI/CD with 5-stage pipeline
- **AWS CodeBuild** - Automated build and deployment
- **AWS ECR** - Elastic Container Registry for image storage
- **AWS ECS** - Container orchestration for production
- **CloudWatch Logging** - Comprehensive logging and monitoring
- **Multi-Environment Support** - Dev, staging, and production configurations
- **Security Scanning** - Automated dependency scanning in pipeline

## 🛠️ Tech Stack

### Frontend Stack
- **React 18.3.1** - Modern UI library with hooks support
- **TypeScript 5.8.3** - Static type checking for JavaScript
- **Vite 5.4.19** - Next-generation frontend build tool
- **Tailwind CSS 3.4.17** - Utility-first CSS framework with dark mode support
- **Framer Motion 12.26.2** - Production-ready motion library for React
- **shadcn/ui + Radix UI** - 40+ pre-built, accessible, and customizable components
- **React Router 6.30+** - Client-side routing
- **TanStack React Query 5.83.0** - Powerful server state management
- **React Hook Form 7.61.1** - Performance-focused form validation
- **Zod 3.25.76** - TypeScript-first schema declaration and validation
- **Next Themes 0.3.0** - Theme switching and management
- **Lucide React 0.462.0** - Beautiful SVG icons library
- **Recharts 2.15.4** - Composable charting library
- **Framer Motion 12.26.2** - Smooth animations and transitions
- **Sonner 1.7.4** - Toast notifications
- **SWC Compiler** - Next-generation JavaScript compiler (via @vitejs/plugin-react-swc)

### Build & Development Tools
- **Node 18 LTS** - JavaScript runtime
- **npm** - Package manager
- **Vitest 3.2.4** - Unit testing framework
- **ESLint 9.32.0** - Code quality and linting
- **PostCSS 8.5.6** - CSS transformation tool
- **TypeScript ESLint** - TypeScript-aware linting

### DevOps & Infrastructure
- **Docker** - Containerization platform
- **Docker Compose** - Multi-container orchestration
- **AWS CodePipeline** - CI/CD orchestration service
- **AWS CodeBuild** - Managed build service
- **AWS ECR** - Elastic Container Registry
- **AWS ECS** - Elastic Container Service
- **AWS CloudFormation** - Infrastructure as Code
- **CloudWatch** - Logging and monitoring

## 📁 Project Structure

```
pixel-perfect-portfolio/
├── frontend/                          # React + TypeScript Application
│   ├── src/
│   │   ├── App.tsx                   # Root component with routing setup
│   │   ├── main.tsx                  # Entry point
│   │   ├── index.css                 # Global styles
│   │   ├── App.css                   # App-specific styles
│   │   ├── vite-env.d.ts            # Vite environment types
│   │   ├── NavLink.tsx               # Navigation link component
│   │   ├── pages/                    # Page components (routes)
│   │   │   ├── Index.tsx             # Home page / Portfolio view
│   │   │   ├── Admin.tsx             # Admin panel for content management
│   │   │   └── NotFound.tsx          # 404 page
│   │   ├── portfolio/                # Portfolio section components
│   │   │   ├── Header.tsx            # Fixed navigation header (173 lines)
│   │   │   ├── Hero.tsx              # Hero section with animations
│   │   │   ├── About.tsx             # About section
│   │   │   ├── Projects.tsx          # Projects showcase grid
│   │   │   ├── ProjectCard.tsx       # Individual project card
│   │   │   ├── Contact.tsx           # Contact section
│   │   │   ├── Footer.tsx            # Footer component
│   │   │   ├── AdminPanel.tsx        # Admin CRUD interface
│   │   │   ├── InteractiveCanvas.tsx # Canvas-based graphics
│   │   │   └── SmoothScroll.tsx      # Smooth scroll utility
│   │   ├── ui/                       # shadcn/ui Components (40+)
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── ... (30+ more components)
│   │   ├── contexts/                 # React Contexts
│   │   │   └── ThemeContext.tsx      # Dark/light mode management
│   │   ├── hooks/                    # Custom React Hooks
│   │   │   ├── useTypewriter.ts      # Typewriter animation hook
│   │   │   ├── use-mobile.ts         # Mobile detection hook
│   │   │   └── use-toast.ts          # Toast notification hook
│   │   └── lib/                      # Utilities and helpers
│   │       ├── api.ts                # API client utilities
│   │       ├── portfolioData.ts      # Portfolio content data
│   │       └── utils.ts              # Helper functions
│   ├── public/                       # Static assets
│   │   └── robots.txt                # SEO robots configuration
│   ├── components.json               # shadcn/ui configuration
│   ├── dockerfile                    # Docker image definition
│   ├── vite.config.ts               # Vite build configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.app.json            # App-specific TypeScript config
│   ├── tsconfig.node.json           # Node TypeScript config
│   ├── eslint.config.js             # ESLint linting rules
│   ├── vitest.config.ts             # Vitest testing configuration
│   ├── index.html                   # HTML entry point
│   └── package.json                 # Dependencies (90+ packages)
│
├── buildspec.yml                    # AWS CodeBuild specification
│                                     # - ECR login configuration
│                                     # - Docker build commands
│                                     # - Docker push to ECR
│                                     # - Image definitions for ECS
│
├── codebulid.yml                    # Original buildspec template (deprecated)
├── docker-compose.yml               # Local development orchestration
├── aws-pipeline.yml                 # CloudFormation pipeline template (680 lines)
│                                     # - 10 parameters for configuration
│                                     # - 3 CodeBuild projects
│                                     # - 5-stage CI/CD pipeline
│                                     # - 15 outputs
│
├── aws-ecs-deploy.yml              # ECS deployment template
├── .github/
│   └── workflows/
│       └── deploy-to-ecs.yml        # GitHub Actions workflow
├── .env                             # Environment variables (root level)
├── .gitignore                       # Git ignore rules
├── .dockerignore                    # Docker build ignore rules
├── README.md                        # This file
└── package.json                     # Root package configuration (if monorepo)
```

### Key Directories Explained

**`frontend/src/portfolio/`** - Portfolio display components
- Header with navigation and theme toggle
- Hero section with animations
- About, Projects, Skills, Experience sections
- Contact and Footer components

**`frontend/src/ui/`** - shadcn/ui Component Library
- 40+ pre-built, accessible components
- All based on Radix UI primitives
- Full TypeScript support
- Tailwind CSS styled

**`frontend/src/contexts/`** - Application State Management
- ThemeContext for dark/light mode
- Uses React Context API

**`frontend/src/hooks/`** - Custom React Hooks
- useTypewriter - Animated text effect
- use-mobile - Responsive design detection
- use-toast - Toast notifications

## � Installation

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

This installs all dependencies including:
- React & React DOM
- TypeScript
- Tailwind CSS & styling tools
- shadcn/ui components with Radix UI
- Framer Motion for animations
- React Router for navigation
- TanStack React Query
- Testing libraries (Vitest, React Testing Library)

## 🏃 Running Locally

### Option 1: Development Mode (Recommended)

```bash
cd frontend
npm run dev
```

The application will start at:
- **Frontend:** http://localhost:8080
- **Hot Module Replacement (HMR)** enabled for instant updates

### Option 2: Docker Compose

```bash
# From project root
docker-compose up --build

# Frontend will be at http://localhost:8080
```

### Option 3: Production Build & Preview

```bash
cd frontend
npm run build      # Build optimized production bundle
npm run preview    # Preview production build locally
```

## 📊 Available Scripts

### Frontend Scripts

```bash
npm run dev          # Start development server with HMR
npm run build        # Build production bundle
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint code linting
npm run test         # Run unit tests (Vitest)
npm run test:watch   # Run tests in watch mode
```

### Development Environment Variables

Create `.env.local` in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Pixel Perfect Portfolio
VITE_THEME_MODE=system
```

## 🏗️ Building & Deployment

### Build Docker Image

```bash
# Build frontend Docker image
docker build -t pixel-perfect/frontend:latest -f frontend/dockerfile ./frontend
```

### Production Build Output

The build process creates:
- **Optimized JavaScript bundles** (tree-shaken, minified)
- **CSS bundles** (Tailwind CSS, PostCSS processed)
- **Asset hashing** for cache busting
- **Source maps** (development information)
- **HTML entry point** (index.html)

Output directory: `frontend/dist/`

## 📚 Frontend Architecture

The application uses a modular, component-based architecture:

### Page Structure

- **Index Page** - Main portfolio view with all sections
- **Admin Page** - Admin panel for content management (if implemented)
- **NotFound Page** - 404 error page

### Component Hierarchy

```
App (Router setup)
├── TooltipProvider
├── QueryClientProvider
├── Toaster / Sonner (Toast notifications)
└── Routes
    ├── Index
    │   ├── Header (Navigation + Theme Toggle)
    │   ├── Hero (Hero Section)
    │   ├── About (About Section)
    │   ├── Projects (Project Grid)
    │   │   └── ProjectCard (Individual Projects)
    │   ├── Contact (Contact Section)
    │   └── Footer (Footer)
    ├── Admin
    │   └── AdminPanel (CRUD Interface)
    └── NotFound (404 Page)
```

### State Management

- **React Context** - ThemeContext for dark/light mode
- **TanStack React Query** - Server state (if API calls implemented)
- **React Hook Form** - Form state in admin/contact forms
- **Local Storage** - Theme preference persistence

### Data Flow

1. **Static Portfolio Data** - Stored in `lib/portfolioData.ts`
2. **Component Props** - Data passed through component tree
3. **React Context** - Theme state shared globally
4. **Form Submission** - Contact forms handled with React Hook Form + Zod validation

## 🎨 Styling

### Tailwind CSS

- **Utility-first approach** - Rapid UI development
- **Dark mode support** - Class-based dark mode with Next Themes
- **Custom theme** - Extended Tailwind configuration
- **Responsive breakpoints** - Mobile, tablet, desktop support
- **Animation utilities** - tailwindcss-animate plugin

### Tailwind Configuration

Located in `tailwind.config.ts`:
- Custom color palette
- Extended font family (Inter, Outfit)
- Animation definitions
- Responsive spacing and sizing

## 🎬 Animations & Interactions

### Framer Motion Features

- **Page transitions** - Smooth enter/exit animations
- **Component animations** - Button hover states, scrolling effects
- **Stagger animations** - Sequential element animations
- **Gesture controls** - Tap, drag, and hover interactions

### Key Animated Components

- Header navigation with slide-in animation
- Hero section with typewriter effect
- Project cards with hover animations
- Smooth scroll behaviors
- Mobile menu with slide animations

## 📦 Component Library (shadcn/ui)

Pre-built, production-ready components powered by Radix UI:

| Component Category | Components |
|---|---|
| **Forms** | Input, Select, Textarea, Checkbox, Radio Group, Switch, Toggle |
| **Navigation** | Navigation Menu, Menubar, Breadcrumb, Pagination |
| **Data Display** | Table, Accordion, Tabs, Carousel, Progress, Skeleton |
| **Feedback** | Alert, Alert Dialog, Toast, Tooltip |
| **Containers** | Card, Dialog, Drawer, Sheet, Popover |
| **Layout** | Sidebar, Resizable, Scroll Area, Separator |
| **Other** | Badge, Avatar, Hover Card, Context Menu, Dropdown Menu |

All components are:
- ✅ Fully accessible (WCAG compliant)
- ✅ Customizable with Tailwind CSS
- ✅ TypeScript typed
- ✅ Dark mode compatible

## 🌐 AWS Deployment

This project is configured for **automated deployment to AWS** using CodePipeline and ECS.

### AWS Architecture

```
GitHub Repository
    ↓ (Webhook Trigger)
CodePipeline
    ├── Stage 1: Source (GitHub)
    ├── Stage 2: Build (CodeBuild)
    │   ├── Login to ECR
    │   ├── Build Docker image
    │   └── Push to ECR registry
    ├── Stage 3: Manual Approval (Optional)
    └── Stage 4: Deploy (ECS)
        └── Update ECS service with new image
```

### Prerequisites for AWS Deployment

- ✅ AWS Account with appropriate IAM permissions
- ✅ AWS region: `ap-south-1` (Asia Pacific - Mumbai)
- ✅ ECR repository: `744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs`
- ✅ GitHub Personal Access Token
- ✅ CloudFormation permissions

### ECR Configuration

**Registry:** `744709874293.dkr.ecr.ap-south-1.amazonaws.com`
**Repository:** `codebulid/ecs`
**Region:** `ap-south-1`

### CodeBuild Configuration (buildspec.yml)

The `buildspec.yml` file automates the build and deployment:

```yaml
Phases:
1. Pre-Build   - ECR login and environment setup
2. Build       - Docker image build from frontend/dockerfile
3. Post-Build  - Push to ECR, create image definitions for ECS
```

### Deploy with CloudFormation

```bash
# Create CodePipeline stack
aws cloudformation create-stack \
  --stack-name pixel-perfect-pipeline \
  --template-body file://aws-pipeline.yml \
  --parameters \
    ParameterKey=GitHubToken,ParameterValue=YOUR_GITHUB_TOKEN \
    ParameterKey=EnvironmentName,ParameterValue=dev \
  --capabilities CAPABILITY_NAMED_IAM \
  --region ap-south-1

# Check stack creation status
aws cloudformation describe-stacks \
  --stack-name pixel-perfect-pipeline \
  --region ap-south-1
```

### Deployment Environments

| Environment | Configuration |
|---|---|
| **dev** | Development builds, no manual approval |
| **staging** | Staging builds, manual approval required |
| **prod** | Production builds, strict manual approval |

### Post-Deployment

After successful deployment:

1. ✅ Docker image pushed to ECR
2. ✅ Image registered in ECS task definition
3. ✅ ECS service updated with new image
4. ✅ Application auto-scales based on load
5. ✅ CloudWatch logs available for monitoring

### Monitoring Deployment

```bash
# View CodeBuild logs
aws logs tail /aws/codebuild/pixel-perfect-build --follow

# View ECS service status
aws ecs describe-services \
  --cluster pixel-perfect-cluster \
  --services pixel-perfect-service \
  --region ap-south-1

# Check ECR image tags
aws ecr describe-images \
  --repository-name codebulid/ecs \
  --region ap-south-1
```

**Detailed deployment guide:** See [PIPELINE_DEPLOYMENT_GUIDE.md](./PIPELINE_DEPLOYMENT_GUIDE.md)

## 🔐 Environment Variables

### Frontend Environment (.env.local)

Create `.env.local` in the `frontend/` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000

# App Configuration
VITE_APP_NAME=Pixel Perfect Portfolio
VITE_THEME_MODE=system

# Optional: Analytics, external services
# VITE_ANALYTICS_KEY=...
# VITE_RECAPTCHA_SITE_KEY=...
```

### Environment Modes

- **Development** - `npm run dev` (source maps enabled, HMR active)
- **Production** - `npm run build` (minified, optimized)

### Build-time Variables

Vite processes environment variables at build time:
- Prefix: `VITE_`
- Only accessible in browser (not secrets)
- Baked into bundle during build

## 🐳 Docker Support

### Frontend Dockerfile

Located at `frontend/dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host"]
```

**Image:** Node.js 18 Alpine (lightweight ~170MB)
**Port:** 8080
**Mode:** Development (HMR enabled)

### Build Docker Image

```bash
# Build for production
docker build -t pixel-perfect/frontend:latest -f frontend/dockerfile ./frontend

# Build with custom tag
docker build -t 744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs:latest \
  -f frontend/dockerfile ./frontend
```

### Run Docker Container

```bash
# Run locally
docker run -p 8080:8080 pixel-perfect/frontend:latest

# Run with environment variables
docker run -p 8080:8080 \
  -e VITE_API_URL=http://api.example.com \
  pixel-perfect/frontend:latest
```

### Docker Compose

```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Push to AWS ECR

```bash
# Login to ECR
aws ecr get-login-password --region ap-south-1 | \
  docker login --username AWS --password-stdin 744709874293.dkr.ecr.ap-south-1.amazonaws.com

# Tag image
docker tag pixel-perfect/frontend:latest \
  744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs:latest

# Push to registry
docker push 744709874293.dkr.ecr.ap-south-1.amazonaws.com/codebulid/ecs:latest

# Verify push
aws ecr describe-images \
  --repository-name codebulid/ecs \
  --region ap-south-1
```

## 🧪 Testing & Quality

### Frontend Testing

```bash
cd frontend

# Run all tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Code Linting

```bash
cd frontend

# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

### Testing Tools

- **Vitest 3.2.4** - Fast unit test framework
- **React Testing Library** - Component testing
- **jsdom** - DOM simulation
- **@testing-library/jest-dom** - DOM matchers

### Code Quality Tools

- **ESLint 9.32.0** - Code style and quality
- **TypeScript 5.8.3** - Type checking
- **Prettier** - Code formatting (optional)

## 🗄️ Data Structure

### Portfolio Data (Static)

The application uses static portfolio data defined in `src/lib/portfolioData.ts`:

```typescript
interface PortfolioData {
  personal: {
    name: string;
    title: string;
    description: string;
    email: string;
    phone?: string;
    location?: string;
  };
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  social: SocialLink[];
  contact: ContactInfo;
}
```

### Data Management

- **Static data** - Hardcoded in TypeScript files
- **Component state** - React hooks for dynamic data
- **Context state** - Theme preferences
- **Local storage** - Theme persistence
- **Form state** - React Hook Form for contact/admin forms

## 🔍 Performance Optimization

### Build Optimizations

- **Tree shaking** - Dead code elimination
- **Code splitting** - Route-based chunking
- **Minification** - JavaScript and CSS minification
- **Asset optimization** - Image and font optimization
- **CSS purging** - Unused CSS removal (Tailwind)

### Runtime Optimizations

- **Lazy loading** - Component code splitting with React.lazy
- **Image optimization** - Next Image-like patterns (if needed)
- **Memoization** - React.memo for expensive components
- **Virtual scrolling** - For large lists (if needed)

### Bundle Analysis

```bash
npm run build  # Creates dist/ with production bundle
# Check dist/ folder size and assets
```

### Performance Metrics

- **Lighthouse Score** - Test with Chrome DevTools
- **Core Web Vitals** - LCP, FID, CLS
- **Bundle Size** - ~150-200KB gzipped (typical)

## 🔍 Architecture

The application follows a **component-based, modular architecture**:

```
User Browser
    ↓
Vite Dev Server / Production Build
    ↓
React Application (App.tsx)
    ├── Router (React Router 6)
    ├── Theme Provider (Context API)
    ├── Query Provider (TanStack Query)
    └── Pages (Index, Admin, NotFound)
        └── Components (Header, Hero, Projects, etc.)
```

### Key Architectural Patterns

1. **Component Composition** - Small, reusable components
2. **Context API** - Global state (theme)
3. **Custom Hooks** - Shared logic (useTypewriter, etc.)
4. **Form Validation** - React Hook Form + Zod
5. **Type Safety** - Full TypeScript coverage

For detailed architecture, see [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📖 Documentation

Complete documentation is available:

- **[README.md](./README.md)** - This file
- **[PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)** - Complete project reference
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture and design patterns
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick lookup guide
- **[PIPELINE_DEPLOYMENT_GUIDE.md](./PIPELINE_DEPLOYMENT_GUIDE.md)** - Deployment instructions

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository** and clone your fork
   ```bash
   git clone https://github.com/yourusername/pixel-perfect-portfolio.git
   cd pixel-perfect-portfolio
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes** and test thoroughly
   ```bash
   npm run test
   npm run lint
   ```

4. **Commit with clear messages**
   ```bash
   git commit -m "feat: Add amazing feature"
   ```

5. **Push and open a Pull Request**
   ```bash
   git push origin feature/amazing-feature
   ```

### Commit Message Guidelines

Follow conventional commits format:

```
type(scope): subject

type: feat, fix, docs, style, refactor, test, chore
scope: frontend, backend, devops, etc.
subject: Use imperative mood, lowercase, no period
```

**Examples:**
- `feat(frontend): add dark mode toggle`
- `fix(components): resolve button styling issue`
- `docs(readme): update installation steps`
- `refactor(utils): simplify animation logic`
- `test(hero): add hero section tests`

### Code Style

- **ESLint** - Automated linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (optional)
- **Tailwind CSS** - Utility classes only

## 🐛 Troubleshooting

### Common Issues

**Port 8080 already in use:**
```bash
# Kill process on port 8080
lsof -ti:8080 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

**Module not found errors:**
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

**Docker build failures:**
```bash
# Clear Docker cache
docker system prune -a --volumes

# Rebuild
docker-compose build --no-cache
```

**Theme not persisting:**
```bash
# Clear localStorage
localStorage.clear()

# Check theme context setup
```

For more troubleshooting, see [QUICK_REFERENCE.md](./QUICK_REFERENCE.md#troubleshooting)

## 📞 Support & Contact

- 📧 **Email:** your-email@example.com
- 🐙 **GitHub Issues:** [Open an issue](https://github.com/yourusername/pixel-perfect-portfolio/issues)
- 📚 **Documentation:** See [docs folder](./docs/)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/yourusername/pixel-perfect-portfolio/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

You are free to:
- ✅ Use for personal and commercial projects
- ✅ Modify and distribute
- ✅ Include in larger projects

You must:
- 📋 Include license and copyright notice
- 📝 Document changes

## 🙏 Acknowledgments

### Libraries & Tools

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Router](https://reactrouter.com/) - Routing
- [TanStack React Query](https://tanstack.com/query/latest) - Server state
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

### Resources

- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [AWS CodePipeline Documentation](https://docs.aws.amazon.com/codepipeline/)
- [Docker Documentation](https://docs.docker.com/)
- [React Best Practices](https://react.dev/learn)

## 📈 Roadmap

Future enhancements planned:

- [ ] Blog/Articles section
- [ ] Project comments and ratings
- [ ] Analytics dashboard
- [ ] Social authentication (GitHub, Google)
- [ ] Newsletter subscription
- [ ] Full-text search
- [ ] Multi-language support (i18n)
- [ ] Mobile app version (React Native)
- [ ] CMS integration
- [ ] API backend with database
- [ ] Admin authentication system
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] SEO optimization enhancements

## 🎯 Quick Links

- **GitHub:** https://github.com/yourusername/pixel-perfect-portfolio
- **Live Demo:** https://pixel-perfect-portfolio.example.com
- **Project Board:** [GitHub Projects](https://github.com/yourusername/pixel-perfect-portfolio/projects)
- **CI/CD Pipeline:** [CodePipeline Dashboard](https://console.aws.amazon.com/codepipeline/)
- **Docker Hub:** [Image Repository](https://hub.docker.com/r/yourusername/pixel-perfect)

---

**Last Updated:** January 2026  
**Version:** 1.0.0  
**Status:** ✅ Production Ready  
**Maintainers:** [Your Name/Team]
