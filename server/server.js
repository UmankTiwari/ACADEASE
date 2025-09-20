const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api', (req, res) => {
  res.json({ 
    ok: true, 
    service: "acadease-backend",
    message: "Backend is running successfully!"
  });
});

// Animation data for 3D components
app.get('/api/animation-data', (req, res) => {
  res.json({
    bitStates: [0, 1, 0, 1, 1, 0],
    transistorStates: ['off', 'on', 'off', 'on'],
    hardwareTypes: ['cpu', 'memory', 'gpu'],
    animationSpeed: 1.0,
    colors: {
      bitOn: '#00ff00',
      bitOff: '#ff0000',
      transistorOn: '#00ff00',
      transistorOff: '#666666'
    },
    timestamp: new Date().toISOString()
  });
});

// Events endpoint
app.get('/api/events', (req, res) => {
  res.json([
    {
      id: 1,
      title: "3D Animation Demo",
      description: "Interactive 3D components for learning",
      when: new Date(),
      pinned: true
    },
    {
      id: 2,
      title: "Bits & Transistors",
      description: "Learn about digital fundamentals",
      when: new Date(),
      pinned: false
    }
  ]);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available:`);
  console.log(`   - GET /api - Main API info`);
  console.log(`   - GET /api/animation-data - 3D animation data`);
  console.log(`   - GET /api/events - Events data`);
  console.log(`   - GET /api/health - Health check`);
});

module.exports = app;
