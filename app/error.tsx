'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4 text-center">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-slate-400 mb-8">
          We encountered an unexpected error while loading the page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
