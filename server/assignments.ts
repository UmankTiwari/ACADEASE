import mongoose, { Schema, Document } from "mongoose";

// Interface for the Assignment document
export interface IAssignment extends Document {
  userId: string;
  title: string;
  course: string;
  due: Date;
  status: "pending" | "in-progress" | "done";
}

const AssignmentSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  course: { type: String, required: true },
  due: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "done"],
    default: "pending",
    required: true,
  },
}, { timestamps: true });

// The `mongoose.models.Assignment` check prevents Mongoose from recompiling the model
export const Assignment = mongoose.models.Assignment || mongoose.model<IAssignment>("Assignment", AssignmentSchema);