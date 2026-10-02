const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

// Define Schemas directly in the script to avoid module import issues
const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  imageUrl: String,
  liveLink: String,
  githubLink: String,
}, { timestamps: true });

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String, required: true },
  description: [String],
  isCurrent: { type: Boolean, default: false },
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);

async function seedDatabase() {
  try {
    console.log('Connecting to MongoDB...');
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI not found in .env.local');
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected successfully!');

    await Project.deleteMany({});
    await Experience.deleteMany({});
    console.log('Cleared existing data...');

    const sampleProjects = [
      {
        title: 'AI-Powered SaaS Dashboard',
        description: 'A high-performance dashboard featuring real-time analytics, AI-driven insights, and a stunning dark-mode UI.',
        imageUrl: 'https://picsum.photos/seed/ai-dashboard/800/450',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
        liveLink: 'https://demo.ai-dashboard.com',
        githubLink: 'https://github.com/username/ai-dashboard',
      },
      {
        title: 'Modern E-Commerce Experience',
        description: 'A full-featured online store with seamless checkout, advanced filtering, and a mobile-first design.',
        imageUrl: 'https://picsum.photos/seed/ecommerce-shop/800/450',
        techStack: ['React', 'Node.js', 'Stripe', 'MongoDB'],
        liveLink: 'https://demo.shop-premium.com',
        githubLink: 'https://github.com/username/shop-premium',
      },
      {
        title: 'Real-time Collaboration Tool',
        description: 'A productivity app allowing teams to collaborate in real-time with instant messaging and task tracking.',
        imageUrl: 'https://picsum.photos/seed/team-collab/800/450',
        techStack: ['Next.js', 'Socket.io', 'Tailwind CSS', 'MongoDB'],
        liveLink: 'https://demo.collab-tool.com',
        githubLink: 'https://github.com/username/collab-tool',
      }
    ];

    const sampleExperience = [
      {
        company: 'TechNova Solutions',
        role: 'Senior Full-Stack Developer',
        duration: '2022 - Present',
        description: [
          'Leading the development of cloud-native applications using Next.js and MongoDB.',
          'Improved application performance by 40% through optimized database queries.',
          'Mentored a team of 5 junior developers in modern React patterns.'
        ],
        isCurrent: true,
      },
      {
        company: 'WebFlow Agency',
        role: 'Frontend Engineer',
        duration: '2020 - 2022',
        description: [
          'Developed 20+ responsive websites for international clients.',
          'Integrated complex REST APIs and optimized frontend load times.',
          'Collaborated with designers to implement pixel-perfect UI/UX.'
        ],
        isCurrent: false,
      }
    ];

    await Project.insertMany(sampleProjects);
    await Experience.insertMany(sampleExperience);

    console.log('Successfully seeded database with premium data! 🚀');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
