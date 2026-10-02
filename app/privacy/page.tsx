import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Privacy Policy</h1>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full mb-12" />

        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">1. Information Collection</h2>
            <p>
              I only collect information that you voluntarily provide via the contact form,
              such as your name, email address, and message.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">2. Use of Information</h2>
            <p>
              The information collected is used solely to respond to your inquiries and
              communicate regarding potential collaborations. I do not sell or share your
              personal data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-400 mb-2">3. Data Storage</h2>
            <p>
              Your messages are stored securely in a MongoDB database. I take reasonable
              measures to protect your information from unauthorized access.
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
