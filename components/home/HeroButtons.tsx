"use client";

import { ArrowRight } from 'lucide-react';

export default function HeroButtons() {
  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20 transform hover:scale-105 active:scale-95"
      >
        View Work <ArrowRight size={18} />
      </button>
      <button
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="bg-slate-800 text-white px-8 py-3 rounded-full font-bold border border-slate-700 hover:bg-slate-700 transition-all transform hover:scale-105 active:scale-95"
      >
        Contact Me
      </button>
    </div>
  );
}
