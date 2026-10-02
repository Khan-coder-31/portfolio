import { ExternalLink, Github } from 'lucide-react';
import dbConnect from '@/lib/db';
import { Project } from '@/lib/models/Project';
import { Experience } from '@/lib/models/Experience';

export const dynamic = 'force-dynamic';

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import ExperienceSection from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import ContactForm from '@/components/home/ContactForm';

export default async function HomePage() {
  await dbConnect();

  const projects = (await Project.find({}).sort({ createdAt: -1 }).lean()) as any[];
  const experiences = (await Experience.find({}).sort({ createdAt: -1 }).lean()) as any[];

  return (
    <main className="bg-slate-900 min-h-screen text-slate-200">
      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />

        <Projects projects={projects} />

        <ExperienceSection experiences={experiences} />

        <Skills />

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto px-4 w-full py-20 text-center">
          <div className="bg-slate-800/50 border border-slate-700 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 mb-8">Have a project in mind? Let&apos;s build something extraordinary together.</p>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
