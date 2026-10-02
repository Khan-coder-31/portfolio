"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logoUrl?: string;
  isCurrent: boolean;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="relative border-l-2 border-slate-700 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-12 relative pl-8"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 w-4 h-4 bg-indigo-500 rounded-full -left-[9px] z-10 border-4 border-slate-900" />

            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700 backdrop-blur-lg hover:border-indigo-500/50 transition-all">
              <div className="flex items-center gap-4 mb-2 flex-wrap justify-between">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-medium px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-md border border-indigo-500/30">
                  {exp.duration}
                </span>
              </div>
              <div className="text-indigo-400 font-medium mb-4">{exp.company}</div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              {exp.isCurrent && (
                <div className="mt-4 flex items-center gap-2 text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                  Currently Working Here
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
