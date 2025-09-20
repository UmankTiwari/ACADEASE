# 🎓 Acadease - Interactive Learning Platform

A modern academic support platform with 3D animations and interactive learning experiences, built for hackathon competition.

## ✨ Features

- **3D Interactive Visualizations**: Learn about bits, transistors, and hardware through animated 3D models
- **CS50-Style Learning**: Engaging educational content with visual demonstrations
- **Real-time Animations**: Smooth 60fps 3D animations using React Three Fiber
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Backend API**: RESTful API providing animation data and learning content

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hackathon-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   # Start both frontend and backend
   npm start
   
   # Or start individually
   npm run frontend  # Frontend on http://localhost:3001
   npm run backend   # Backend on http://localhost:3003
   ```

4. **Open your browser**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3003

## 🎯 3D Components

- **Bit3DViewer**: Interactive 3D cubes showing binary states (0/1)
- **Transistor3DViewer**: 3D transistor models with on/off states
- **Hardware3DViewer**: CPU, Memory, GPU components in 3D
- **InteractiveScene**: Rotating 3D objects with smooth animations

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Three Fiber
- Tailwind CSS
- Framer Motion

### Backend
- Node.js
- Express.js
- CORS enabled

## 📦 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend: `npm run build`
2. Deploy the `client/dist` folder
3. Update backend URL in `client/src/config.js`

### Backend (Railway/Render)
1. Deploy the `server` folder
2. Update the API URL in frontend config

### Quick Deploy
```bash
npm run deploy
```

## 🎮 Usage

1. Navigate to the "Bits & Transistors" section
2. Watch the 3D animations cycle through different states
3. Interact with the 3D models by hovering over them
4. Learn about digital fundamentals through visual demonstrations

## 📊 API Endpoints

- `GET /api` - Main API info
- `GET /api/animation-data` - 3D animation data
- `GET /api/events` - Events data
- `GET /api/health` - Health check

## 🏆 Hackathon Features

- **Interactive Learning**: 3D visualizations make complex concepts easy to understand
- **Real-time Updates**: Components automatically cycle through states
- **Modern Design**: Clean, professional UI suitable for educational use
- **Scalable Architecture**: Easy to add new learning modules and 3D components

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile devices

## 🔧 Development

### Project Structure
```
hackathon-app/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   └── config.js    # Environment configuration
│   └── dist/        # Built frontend
├── server/          # Express backend
│   └── server.js    # Main server file
└── deploy.md        # Deployment instructions
```

### Adding New 3D Components
1. Create component in `client/src/components/`
2. Import React Three Fiber components
3. Add to the learning modules
4. Update the backend API if needed

## 📄 License

MIT License - feel free to use and modify for your hackathon project!

---

**Built with ❤️ for Hackathon Competition**