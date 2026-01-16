# Deployment Guide - Content Management System

## 📦 Production Deployment

This guide covers deploying your portfolio with the content management system to production.

---

## 🔧 Pre-Deployment Checklist

- [ ] Backend `.env` properly configured with production values
- [ ] Frontend `.env.local` updated with production API URL
- [ ] Database backed up
- [ ] Password changed from default `admin123`
- [ ] JWT secret is strong and unique
- [ ] HTTPS enabled on both frontend and backend
- [ ] CORS origin configured correctly
- [ ] Error logging set up
- [ ] Database backups automated

---

## 🚀 Deployment Options

### Option 1: Heroku (Recommended for Quick Start)

#### Deploy Backend to Heroku

```bash
# Login to Heroku
heroku login

# Create new Heroku app
heroku create portfolio-backend

# Set environment variables
heroku config:set ADMIN_PASSWORD=your_secure_password
heroku config:set JWT_SECRET=your_secret_key
heroku config:set FRONTEND_URL=https://your-domain.com
heroku config:set NODE_ENV=production
heroku config:set PORT=5000

# Deploy
git push heroku main
```

Backend URL: `https://portfolio-backend.herokuapp.com/api`

#### Deploy Frontend to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add VITE_API_URL https://portfolio-backend.herokuapp.com/api
```

Frontend URL: `https://your-app.vercel.app`

---

### Option 2: Docker + VPS/Cloud

#### Create Docker Files

**`Dockerfile`** (Backend)
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY server/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY server/src ./src

# Expose port
EXPOSE 5000

# Start server
CMD ["node", "src/server.js"]
```

**`docker-compose.yml`**
```yaml
version: '3.8'

services:
  backend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - ADMIN_PASSWORD=${ADMIN_PASSWORD}
      - JWT_SECRET=${JWT_SECRET}
      - FRONTEND_URL=${FRONTEND_URL}
      - NODE_ENV=production
    volumes:
      - ./portfolio.db:/app/portfolio.db
    restart: always

  frontend:
    image: node:18-alpine
    working_dir: /app
    volumes:
      - ./src:/app/src
      - ./public:/app/public
      - ./index.html:/app/index.html
      - ./package.json:/app/package.json
      - ./vite.config.ts:/app/vite.config.ts
    ports:
      - "3000:8080"
    environment:
      - VITE_API_URL=http://backend:5000/api
    command: npm run dev
    depends_on:
      - backend
```

#### Deploy to VPS

```bash
# SSH into VPS
ssh user@your-server.com

# Clone repository
git clone https://github.com/your-repo.git
cd your-repo

# Create .env file
cat > .env << EOF
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_secret_key
FRONTEND_URL=https://your-domain.com
NODE_ENV=production
EOF

# Build and run Docker
docker-compose up -d

# Check logs
docker-compose logs -f
```

---

### Option 3: AWS Deployment

#### Using AWS Elastic Beanstalk (Backend)

```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init -p node.js-18 portfolio-backend
eb create portfolio-backend-prod

# Set environment variables
eb setenv ADMIN_PASSWORD=your_secure_password JWT_SECRET=your_secret_key

# Deploy
eb deploy
```

#### Using AWS Amplify (Frontend)

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Set environment variables:
   - `VITE_API_URL`: Backend URL

---

### Option 4: Render.com (Simple & Free-tier)

#### Deploy Backend

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Build command: `cd server && npm install`
5. Start command: `node src/server.js`
6. Add environment variables:
   - `ADMIN_PASSWORD`
   - `JWT_SECRET`
   - `FRONTEND_URL`
   - `NODE_ENV=production`

#### Deploy Frontend

1. Create new Static Site
2. Connect GitHub repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_API_URL=<backend-render-url>`

---

## 🗄️ Database Management

### SQLite Backup

```bash
# Backup database
cp portfolio.db portfolio.db.backup.$(date +%Y%m%d)

# Restore from backup
cp portfolio.db.backup.20240116 portfolio.db
```

### Migrate to PostgreSQL (Recommended for Production)

For high-traffic deployments, migrate from SQLite to PostgreSQL:

```bash
# Install PostgreSQL driver
npm install pg

# Update db/init.js to use PostgreSQL
```

See [database-migration.md](./docs/database-migration.md) for detailed steps.

---

## 🔐 Security Configuration

### Update Environment Variables

```bash
# Generate strong JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Update .env
ADMIN_PASSWORD=your_super_secure_password_here
JWT_SECRET=your_generated_secret_above
FRONTEND_URL=https://your-domain.com
NODE_ENV=production
```

### Enable HTTPS

```bash
# Using Let's Encrypt with Certbot
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d your-domain.com
```

### Configure CORS

Update `server/src/server.js`:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### Add Rate Limiting

```bash
npm install express-rate-limit
```

Update `server/src/server.js`:

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Stricter limit for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

app.use('/api/auth/login', loginLimiter);
```

---

## 📊 Monitoring & Logging

### Add Error Tracking

```bash
npm install @sentry/node
```

Update `server/src/server.js`:

```javascript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV
});

app.use(Sentry.Handlers.errorHandler());
```

### Enable Logging

```bash
npm install winston
```

Create `server/src/logger.js`:

```javascript
import winston from 'winston';

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Heroku
        env:
          HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
        run: |
          git push https://heroku:$HEROKU_API_KEY@git.heroku.com/portfolio-backend.git main
```

---

## 📈 Scaling Considerations

### For High Traffic

1. **Use PostgreSQL** instead of SQLite
2. **Add Redis** for caching
3. **Implement CDN** for static assets
4. **Use load balancer** for multiple backend instances
5. **Enable database connection pooling**

### Example with PostgreSQL + Redis

```javascript
import redis from 'redis';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const client = redis.createClient({
  url: process.env.REDIS_URL
});

// Cache API responses
app.get('/api/projects', async (req, res) => {
  const cacheKey = 'projects:all';
  const cached = await client.get(cacheKey);
  
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  const result = await pool.query('SELECT * FROM projects');
  await client.setEx(cacheKey, 300, JSON.stringify(result.rows));
  
  res.json(result.rows);
});
```

---

## 🚨 Troubleshooting Deployment

### Backend not connecting
```bash
# Check backend logs
heroku logs --tail

# Test API health
curl https://your-backend-url/api/health
```

### CORS errors
- Verify `FRONTEND_URL` matches exactly
- Check browser console for detailed error
- Ensure both use HTTPS in production

### Database errors
```bash
# Check database connection
psql $DATABASE_URL -c "SELECT 1;"

# Backup and recreate
pg_dump $DATABASE_URL > backup.sql
```

### SSL/Certificate errors
```bash
# Verify certificate
openssl s_client -connect your-domain.com:443

# Renew Let's Encrypt
sudo certbot renew --force-renewal
```

---

## 📋 Deployment Checklist

- [ ] Backend deployed and running
- [ ] Frontend deployed and running
- [ ] API URL correct in frontend
- [ ] HTTPS enabled on both
- [ ] Password changed from default
- [ ] Database backed up
- [ ] Monitoring/logging set up
- [ ] Error tracking enabled
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Health check endpoint working
- [ ] Admin panel accessible
- [ ] Can create/update/delete content
- [ ] Changes persist in database

---

## 🎯 Post-Deployment

1. Test admin panel thoroughly
2. Create backups immediately
3. Set up automated backups (daily)
4. Monitor error logs daily
5. Keep dependencies updated
6. Plan regular security audits

---

## 📞 Support

For deployment issues:
1. Check logs first
2. Review error tracking (Sentry)
3. Test API endpoints manually
4. Check environment variables
5. Verify database connectivity

Good luck with your deployment! 🚀
