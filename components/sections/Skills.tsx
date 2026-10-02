"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API", "GraphQL"],
    color: "from-indigo-400 to-purple-500"
  },
  {
    category: "Tools & Others",
    items: ["Git", "Docker", "AWS", "Firebase", "Figma", "Vercel"],
    color: "from-purple-400 to-pink-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-7xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-lg hover:border-indigo-500/50 transition-all group"
          >
            <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-900/50 border border-slate-700 rounded-md group-hover:border-indigo-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
