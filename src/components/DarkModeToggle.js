import React, { useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="w-16 h-8 flex items-center px-0.5 rounded-full bg-[#00796B] relative transition-colors duration-900 focus:outline-none"
      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
    >
      {/* Animated white circle */}
      <span
        className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-900 z-10 shadow ${isDark ? 'left-1' : 'right-1'}`}
      >
        <span className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
          {isDark ? (
            <svg width="16" height="16" fill="none" stroke="#00796B" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          ) : (
            <svg width="16" height="16" fill="none" stroke="#00796B" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          )}
        </span>
      </span>
      {/* Static sun icon on right */}
      <span className="absolute right-2 flex items-center justify-center">
        <svg width="16" height="16" fill="none" stroke="#B2DFDB" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>
      {/* Static moon icon on left */}
      <span className="absolute left-2 flex items-center justify-center">
        <svg width="16" height="16" fill="none" stroke="#00796B" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
      </span>
    </button>
  );
} 