import { Router, Request, Response } from "express";
import { Event } from "./models/events.ts";

const r = Router();

// GET /api/events - Fetch all events
r.get("/", async (_req: Request, res: Response) => {
  try {
    const docs = await Event.find().sort({ pinned: -1, when: 1 }).lean();
    res.json(docs);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// POST /api/events - Create a new event
r.post("/", async (req: Request, res: Response) => {
  try {
    const doc = await Event.create(req.body);
    res.status(201).json(doc);
  } catch (e) {
    res.status(400).json({ error: "Invalid event data" });
  }
});

// PUT /api/events/:id - Update an existing event
r.put("/:id", async (req: Request, res: Response) => {
  try {
    const doc = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(doc);
  } catch (e) {
    res.status(400).json({ error: "Failed to update event" });
  }
});

// DELETE /api/events/:id - Delete an event
r.delete("/:id", async (req: Request, res: Response) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default r;