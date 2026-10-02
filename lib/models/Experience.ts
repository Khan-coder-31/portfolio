import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  description: [String],
  logoUrl: String,
  isCurrent: { type: Boolean, default: false },
}, { timestamps: true });

export const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
