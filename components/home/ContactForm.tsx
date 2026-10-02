"use client";

import { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        };

        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            alert('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
          } else {
            const err = await res.json();
            alert(`Error: ${err.error || 'Something went wrong'}`);
          }
        } catch (err) {
          alert('An error occurred while sending the message.');
        } finally {
          setIsSubmitting(false);
        }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400 ml-1">Name</label>
        <input
          name="name"
          type="text"
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="John Doe"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400 ml-1">Email</label>
        <input
          name="email"
          type="email"
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="john@example.com"
          required
        />
      </div>
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-sm text-slate-400 ml-1">Message</label>
        <textarea
          name="message"
          rows={4}
          className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          placeholder="Tell me about your project..."
          required
        ></textarea>
      </div>
      <button
        disabled={isSubmitting}
        className="md:col-span-2 bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>Sending... <Loader2 size={18} className="animate-spin" /></>
        ) : (
          <>Send Message <Mail size={18} /></>
        )}
      </button>
    </form>
  );
}
