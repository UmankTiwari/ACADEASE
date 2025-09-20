import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  when: Date;
  pinned: boolean;
  createdAt: Date;
}

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  when: { type: Date, required: true },
  pinned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Event = mongoose.model<IEvent>('Event', eventSchema);

