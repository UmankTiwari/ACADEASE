# 🚀 Acadease Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Connect your repository
4. Deploy settings:
   - Build command: `cd client && npm run build`
   - Publish directory: `client/dist`
5. Your app will be live at: `https://your-app-name.netlify.app`

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your repository
4. Framework preset: Vite
5. Your app will be live at: `https://your-app-name.vercel.app`

### Option 3: GitHub Pages
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: main, folder: /client/dist
4. Your app will be live at: `https://username.github.io/repo-name`

## Backend Hosting Options

### Option 1: Railway
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Select server folder
4. Deploy automatically

### Option 2: Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Select server folder
5. Deploy

### Option 3: Heroku
1. Go to [heroku.com](https://heroku.com)
2. Create new app
3. Connect GitHub repository
4. Deploy from main branch

## Environment Variables
For production, update the API URL in your frontend to point to your hosted backend.

## Current Status
✅ Frontend built successfully
✅ Backend running locally
✅ 3D animations working
✅ API endpoints functional
