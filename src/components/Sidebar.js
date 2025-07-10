import React from "react";

const icons = [
  // Dashboard
  (
    <svg width="28" height="28" fill="none" stroke="#26C6DA" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
    </svg>
  ),
  // Stats
  (
    <svg width="28" height="28" fill="none" stroke="#B0B0B0" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="4" y="10" width="3" height="10" rx="1.5" />
      <rect x="10.5" y="4" width="3" height="16" rx="1.5" />
      <rect x="17" y="7" width="3" height="13" rx="1.5" />
    </svg>
  ),
  // Book
  (
    <svg width="28" height="28" fill="none" stroke="#B0B0B0" strokeWidth="2.2" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M12 5v16" />
    </svg>
  ),
  // Star
  (
    <svg width="28" height="28" fill="none" stroke="#B0B0B0" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ),
  // Bookmark
  (
    <svg width="28" height="28" fill="none" stroke="#B0B0B0" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-7-5-7 5V4z" />
    </svg>
  ),
];

export default function Sidebar() {
  return (
    <aside className="w-20 bg-[#191B1D] flex flex-col items-center py-6 min-h-screen relative">
      {/* Logo */}
      <div className="mb-10 mt-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 3C16 3 6 15.5 6 21.5C6 26.1944 10.0294 30 16 30C21.9706 30 26 26.1944 26 21.5C26 15.5 16 3 16 3Z" fill="#F79009"/>
        </svg>
      </div>
      {/* Collapse button */}
      <div className="mb-10">
        <button className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center bg-[#232527] shadow-md">
          <svg width="22" height="22" fill="none" stroke="#B0B0B0" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M8 5l8 7-8 7" /></svg>
        </button>
      </div>
      {/* Icons */}
      <nav className="flex flex-col gap-8 flex-1 items-center w-full">
        {icons.map((icon, i) => (
          <div key={i} className="relative w-full flex items-center justify-center">
            {/* Active indicator for first icon only */}
            {i === 0 && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-[#26C6DA] rounded-full" />
            )}
            <button
              className={`transition-colors w-full flex items-center justify-center ${i === 0 ? "text-[#26C6DA]" : "text-[#B0B0B0] hover:text-[#26C6DA]"}`}
              style={{ height: 32 }}
            >
              {icon}
            </button>
          </div>
        ))}
      </nav>
    
    </aside>
  );
} 