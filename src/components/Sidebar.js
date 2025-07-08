import React from "react";

const icons = [
  // Placeholder SVGs for sidebar icons
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" /></svg>
  ),
  (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a7 7 0 1 0-14.8 0" /></svg>
  ),
];

export default function Sidebar() {
  return (
    <aside className="w-16 bg-[#191B1D] flex flex-col items-center py-6 space-y-8 min-h-screen">
      {/* Logo */}
      <div className="mb-8">
        <span className="block w-8 h-8 bg-orange-600 rounded-full" />
      </div>
      {/* Icons */}
      <nav className="flex flex-col gap-8 flex-1">
        {icons.map((icon, i) => (
          <button key={i} className="text-gray-400 hover:text-cyan-400 transition-colors">{icon}</button>
        ))}
      </nav>
      {/* Settings icon */}
      <button className="mt-auto text-gray-400 hover:text-cyan-400 transition-colors">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a7 7 0 1 0-14.8 0" /></svg>
      </button>
    </aside>
  );
} 