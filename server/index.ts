import express, { Express, Request, Response } from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { requireUser } from "./auth.ts";

// These imports will be enabled as you create the route files
import events from "./events.ts";
// import timetable from "./routes/timetable.js";
// import notices from "./routes/notices.js";
// import assignments from "./routes/assignments.js";
// import { botRouter } from "./bot/intents.js";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(requireUser); // Apply user middleware globally

const MONGO = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 5000;

async function start() {
  if (MONGO) {
    await mongoose.connect(MONGO);
    console.log("MongoDB connected");
  } else {
    console.warn("MONGO_URI not set. Running without persistent DB.");
  }

  // API Routes
  app.use("/api/events", events);
  // app.use("/api/timetable", timetable);
  // app.use("/api/notices", notices);
  // app.use("/api/assignments", assignments);
  // app.use("/api/bot", botRouter);

  app.get("/api", (req: Request, res: Response) => res.json({ ok: true, service: "student-life" }));
  
  // Sample data for 3D animations
  app.get("/api/animation-data", (req: Request, res: Response) => {
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

  // --- Serve client build in production ---
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const clientBuildPath = path.join(__dirname, "..", "..", "client", "build");
  app.use(express.static(clientBuildPath));
  // Fallback for client-side routing
  app.get('*', (req: Request, res: Response) => {
    if (!req.originalUrl.startsWith('/api')) {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    }
  });

  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
}

start();