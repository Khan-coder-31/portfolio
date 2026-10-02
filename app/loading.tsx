export default function Loading() {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <p className="text-slate-400 font-medium animate-pulse">Loading your portfolio...</p>
      </div>
    </div>
  );
}
