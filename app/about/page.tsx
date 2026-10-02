import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          About Me
        </h1>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-12" />

        <div className="space-y-8 text-lg leading-relaxed text-slate-400">
          <section className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Who I Am</h2>
            <p>
              I am a passionate <strong>Full Stack Developer</strong> dedicated to building scalable,
              user-centric digital experiences. With a strong foundation in both frontend and backend
              technologies, I bridge the gap between complex logic and intuitive design.
            </p>
          </section>

          <section className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">My Journey</h2>
            <p>
              My journey into the world of coding began with a simple curiosity and an obsession
              with how things work. I started programming not just as a career, but as a medium
              to explore my interests and a way to constantly learn new things.
            </p>
            <p className="mt-4">
              The thrill of developing new technologies and turning a blank screen into a
              functional tool is what keeps me motivated. I believe that learning never stops,
              and I am always pushing myself to master the latest frameworks and architectural patterns.
            </p>
          </section>

          <section className="bg-slate-800/40 border border-slate-700 p-6 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">My Philosophy</h2>
            <p>
              I don't just write code; I build solutions. Whether it's a complex tool for developers
              or a sleek landing page, my focus is always on efficiency, maintainability, and
              exceptional user experience.
            </p>
          </section>

          <div className="text-center pt-8">
            <Link
              href="/"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
