import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Terms & Conditions</h1>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-12" />

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">1. Content Use</h2>
            <p>
              All content on this portfolio, including project descriptions and design, is
              for informational purposes. You may view and share the site, but redistribution
              of my personal content without permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">2. Disclaimer</h2>
            <p>
              The information provided in this portfolio is accurate to the best of my knowledge.
              However, I make no warranties about the completeness or accuracy of the content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">3. External Links</h2>
            <p>
              This site contains links to external websites (GitHub, LinkedIn, etc.). I am not
              responsible for the content or practices of these third-party sites.
            </p>
          </section>

          <div className="text-center pt-8">
            <Link
              href="/"
              className="text-indigo-400 hover:text-indigo-300 font-medium transition-all"
            >
              ← Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
