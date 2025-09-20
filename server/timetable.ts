import mongoose, { Schema, Document } from "mongoose";

// Interface for a single slot in the timetable
export interface ITimetableSlot {
  start: string; // e.g., "09:00"
  end: string;   // e.g., "09:50"
  course: string;
  room: string;
}

// Interface for the Timetable document, extending Mongoose's Document
export interface ITimetable extends Document {
  userId: string;
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  slots: ITimetableSlot[];
}

const TimetableSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  day: { type: String, required: true, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  slots: [
    {
      start: { type: String, required: true },
      end: { type: String, required: true },
      course: { type: String, required: true },
      room: { type: String, required: true }
    }
  ]
}, { timestamps: true });

// The `mongoose.models.Timetable` check prevents Mongoose from recompiling the model
export const Timetable = mongoose.models.Timetable || mongoose.model<ITimetable>("Timetable", TimetableSchema);