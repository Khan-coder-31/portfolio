import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  imageUrl: String,
  liveLink: String,
  githubLink: String,
  category: String,
  featured: { type: Boolean, default: false },
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
