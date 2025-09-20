#!/bin/bash

echo "🚀 Deploying Acadease Application..."

# Build frontend
echo "📦 Building frontend..."
cd client
npm run build
cd ..

echo "✅ Frontend built successfully!"
echo ""
echo "🌐 Your application is ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Push your code to GitHub"
echo "2. Choose a hosting platform:"
echo "   - Netlify: https://netlify.com"
echo "   - Vercel: https://vercel.com"
echo "   - Railway: https://railway.app (for backend)"
echo ""
echo "🔗 Current URLs:"
echo "   - Frontend: http://localhost:3001"
echo "   - Backend: http://localhost:3003"
echo ""
echo "📁 Build files are in: client/dist/"
echo "📖 See deploy.md for detailed instructions"

