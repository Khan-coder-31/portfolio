"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            PORTFOLIO
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'About' ? '/about' : `#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-indigo-400 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
