const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 5000;

async function start() {
  if (MONGO) {
    try {
      await mongoose.connect(MONGO);
      console.log("MongoDB connected");
    } catch (error) {
      console.log("MongoDB connection failed:", error.message);
    }
  } else {
    console.warn("MONGO_URI not set. Running without persistent DB.");
  }

  // API Routes
  app.get("/api", (req, res) => res.json({ ok: true, service: "student-life" }));
  
  // Sample data for 3D animations
  app.get("/api/animation-data", (req, res) => {
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
      }
    });
  });

  // Events endpoint
  app.get("/api/events", (req, res) => {
    res.json([
      {
        id: 1,
        title: "3D Animation Demo",
        description: "Interactive 3D components for learning",
        when: new Date(),
        pinned: true
      }
    ]);
  });

  // Serve client build in production
  const clientBuildPath = path.join(__dirname, "..", "client", "dist");
  app.use(express.static(clientBuildPath));
  
  // Fallback for client-side routing
  app.get('*', (req, res) => {
    if (!req.originalUrl.startsWith('/api')) {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    }
  });

  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
}

start().catch(console.error);
