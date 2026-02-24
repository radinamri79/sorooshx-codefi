# Codefi Deployment Guide

## Overview
This guide covers deploying both the Django backend and Next.js frontend for the Codefi project.

### Production URLs
- **Frontend**: https://www.codefi.ca
- **Backend API**: https://backend.codefi.ca
- **Django Admin Panel**: https://backend.codefi.ca/django-admin/login/?next=/django-admin/

### Django Admin Credentials
- **Username**: `soroosh.codefi`
- **Email**: `admin@codefi.ca`
- **Password**: Set in `.env.production` (Change immediately after first login)

---

## Backend (Django) Deployment

### 1. Environment Setup

Create a `.env` file in the backend directory with production values:

```bash
# Copy the example and fill in YOUR values
cp backend/.env.example backend/.env

# Then edit with your production credentials:
# DJANGO_SECRET_KEY=your-unique-secret-key-here
# DB_PASSWORD=your-secure-db-password
# DJANGO_SUPERUSER_PASSWORD=your-secure-admin-password
# etc.
```

### 2. Database Setup

```bash
cd backend
source venv/bin/activate

# Run migrations
python manage.py migrate

# Create superuser (or use management command with env vars)
python manage.py create_superuser
```

### 3. Static Files

```bash
# Collect static files
python manage.py collectstatic --noinput
```

### 4. Web Server Configuration (Gunicorn + Nginx)

**Start Django with Gunicorn**:
```bash
gunicorn soroosh_codefi.wsgi:application --bind 127.0.0.1:8000 --workers 4 --timeout 120
```

**Nginx Configuration**:
```nginx
upstream soroosh_codefi {
    server 127.0.0.1:8000;
}

server {
    listen 443 ssl http2;
    server_name backend.codefi.ca;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    location / {
        proxy_pass http://soroosh_codefi;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /static/ {
        alias /path/to/staticfiles/;
    }

    location /media/ {
        alias /path/to/media/;
    }
}
```

---

## Frontend (Next.js) Deployment

### 1. Environment Setup

Create a `.env.production` file in the frontend directory:

```bash
# Copy the example and fill in YOUR values
cp frontend/.env.example frontend/.env.production

# Then edit:
# NEXT_PUBLIC_API_URL=https://backend.codefi.ca
# NEXT_PUBLIC_SITE_URL=https://www.codefi.ca
```

### 2. Build the Project

```bash
cd frontend

# Install dependencies
npm install

# Build for production
npm run build
```

### 3. Deploy Options

**Option A: Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_API_URL=https://backend.codefi.ca`
- `NEXT_PUBLIC_SITE_URL=https://www.codefi.ca`

**Option B: Self-Hosted**
```bash
# Start production server
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "codefi-frontend" -- run start
```

---

## Local Development Setup

### Backend

```bash
cd backend

# Copy example (already has dev values)
cp .env.example .env.local

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create database (if using PostgreSQL)
createdb soroosh_codefi

# Run migrations
python manage.py migrate

# Create superuser
python manage.py create_superuser

# Start development server
python manage.py runserver
```

Django will be available at: `http://localhost:8000`

### Frontend

```bash
cd frontend

# Copy example (already points to localhost:8000)
cp .env.example .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Next.js will be available at: `http://localhost:3000`

---

## Testing Blog Admin Integration

### 1. Local Testing

1. Start both backend and frontend development servers
2. Navigate to `http://localhost:3000/admin` (frontend admin dashboard)
3. Login with:
   - **Username**: `soroosh.codefi`
   - **Password**: From your `.env.local` DJANGO_SUPERUSER_PASSWORD
4. Test blog CRUD operations:
   - Create a new blog post
   - Add images and categories
   - Edit and delete posts
5. Verify posts appear in the blog page at `http://localhost:3000/blog`

### 2. Production Testing

1. Ensure both services are running:
   - Backend: https://backend.codefi.ca
   - Frontend: https://www.codefi.ca
2. Navigate to `https://www.codefi.ca/admin`
3. Login with production credentials from `.env.production`
4. Test complete blog management workflow
5. Verify posts sync to https://www.codefi.ca/blog

---

## Environment Variables Reference

### Backend (.env)
| Variable | Required | Example | Notes |
|----------|----------|---------|-------|
| DJANGO_SECRET_KEY | Yes | See `django.utils.crypto.get_random_secret_key()` | Generate unique key |
| DJANGO_DEBUG | No | `False` | Always False in production |
| DJANGO_ALLOWED_HOSTS | Yes | `backend.codefi.ca,localhost` | Comma-separated |
| DB_NAME | Yes | `soroosh_codefi` | PostgreSQL database |
| DB_USER | Yes | `soroosh_codefi` | PostgreSQL user |
| DB_PASSWORD | Yes | `your-password` | PostgreSQL password |
| DB_HOST | Yes | `localhost` | Database host |
| DB_PORT | No | `5432` | Database port |
| CORS_ALLOWED_ORIGINS | Yes | `https://www.codefi.ca` | Frontend domains |
| DJANGO_SUPERUSER_USERNAME | No | `soroosh.codefi` | Admin username |
| DJANGO_SUPERUSER_EMAIL | No | `admin@codefi.ca` | Admin email |
| DJANGO_SUPERUSER_PASSWORD | No | `password` | Admin password |

### Frontend (.env.production)
| Variable | Required | Example | Notes |
|----------|----------|---------|-------|
| NEXT_PUBLIC_API_URL | Yes | `https://backend.codefi.ca` | Backend API URL |
| NEXT_PUBLIC_SITE_URL | Yes | `https://www.codefi.ca` | Frontend URL |

---

## Troubleshooting

### CORS Issues
If you see CORS errors:
- Verify `CORS_ALLOWED_ORIGINS` in Django `.env` includes your frontend domain
- Check that `NEXT_PUBLIC_API_URL` points to correct backend URL

### Database Connection Issues
- Verify database credentials in `.env`
- Ensure database server is accessible
- Check database name and user permissions

### Static Files Not Loading
- Run `python manage.py collectstatic --noinput`
- Verify Nginx is correctly configured
- Check file permissions on staticfiles directory

### Admin Login Not Working
- Verify superuser was created: `python manage.py create_superuser`
- Check credentials in `.env`
- Clear browser cookies and try again

---

## Security Checklist

- [ ] Change `DJANGO_SECRET_KEY` to a unique value
- [ ] Set `DJANGO_DEBUG=False` in production
- [ ] Change default admin password after first login
- [ ] Use HTTPS for all production URLs
- [ ] Set strong database password
- [ ] Configure firewall (allow only 80, 443, and ssh)
- [ ] Set up regular database backups
- [ ] Enable CORS only for your frontend domain
- [ ] Keep dependencies updated
- [ ] Review Django settings.py security settings
- [ ] Set up monitoring and error tracking
- [ ] Configure rate limiting on API endpoints

---

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Django and Next.js documentation
3. Check application logs for error messages
4. Verify all environment variables are set correctly
