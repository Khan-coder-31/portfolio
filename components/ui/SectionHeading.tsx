"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  const underlineClass = {
    left: 'left-0',
    center: 'mx-auto',
    right: 'right-0',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignmentClass}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-indigo-500 rounded-full ${underlineClass}`} />
    </motion.div>
  );
};

export default SectionHeading;
