"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Fake placeholder domains jo real demo links nahi hain
const isRealLink = (url?: string) => {
  if (!url) return false;
  return !/your-|example\.com|demo\.[a-z0-9-]+\.com|username\/|placeholder/i.test(url);
};

interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const ProjectImage = ({ imageUrl, title }: { imageUrl?: string; title: string }) => {
  const [broken, setBroken] = useState(false);
  const showFallback = !imageUrl || broken;

  return (
    <div className="h-48 bg-slate-700 relative overflow-hidden">
      {!showFallback ? (
        <img
          src={imageUrl}
          alt={title}
          onError={() => setBroken(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-indigo-600/40 to-slate-800 text-3xl font-bold text-indigo-200/70">
          {title
            .split(' ')
            .slice(0, 2)
            .map((w) => w[0])
            .join('')}
        </div>
      )}
      <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-indigo-600/0 transition-colors duration-300" />
    </div>
  );
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 w-full py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-indigo-500 mx-auto rounded-full"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project._id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }
                }
              }}
              className="group relative bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50"
            >
              <ProjectImage imageUrl={project.imageUrl} title={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack?.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-1 bg-slate-900 text-indigo-300 border border-indigo-500/30 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  {isRealLink(project.liveLink) ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1"
                    >
                      Demo <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span
                      title="Live link abhi add nahi hui"
                      role="link"
                      aria-disabled="true"
                      className="text-slate-600 cursor-not-allowed text-sm font-medium flex items-center gap-1"
                    >
                      Demo <ExternalLink size={14} />
                    </span>
                  )}
                  {isRealLink(project.githubLink) ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1"
                    >
                      Code <Github size={14} />
                    </a>
                  ) : (
                    <span
                      title="Code link abhi add nahi hui"
                      role="link"
                      aria-disabled="true"
                      className="text-slate-600 cursor-not-allowed text-sm font-medium flex items-center gap-1"
                    >
                      Code <Github size={14} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-slate-500">No projects found in the database. Please add some to see them here!</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
