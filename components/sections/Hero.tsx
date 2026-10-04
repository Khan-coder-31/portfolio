"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroButtons from '@/components/home/HeroButtons';

const Hero = () => {
  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-600/20 rounded-full blur-[120px]"
      />

      <div className="max-w-4xl text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-400/10 border border-indigo-400/20 rounded-full"
          >
            Available for hire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white"
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital Experiences</span> that matter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            I am a Full-Stack Developer specializing in building high-performance,
            visually stunning web applications with a focus on user experience and scalability.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <HeroButtons />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
